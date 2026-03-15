import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import {
  Search,
  ChevronRight,
  ChevronDown,
  Clock,
  HardDrive,
  Copy,
  Check,
  Menu,
  X,
  BookOpen,
  Code2,
  Lightbulb,
  ArrowUp,
} from "lucide-react";
import { dsaData, type Question, type Topic } from "./data/dsaData";

// ─── Syntax Highlighter ──────────────────────────────────────
function highlightJava(code: string): string {
  const keywords = [
    "public",
    "private",
    "protected",
    "static",
    "final",
    "abstract",
    "class",
    "interface",
    "extends",
    "implements",
    "new",
    "return",
    "if",
    "else",
    "for",
    "while",
    "do",
    "switch",
    "case",
    "break",
    "continue",
    "default",
    "try",
    "catch",
    "finally",
    "throw",
    "throws",
    "import",
    "package",
    "void",
    "this",
    "super",
    "null",
    "true",
    "false",
    "instanceof",
  ];
  const types = [
    "int",
    "long",
    "double",
    "float",
    "boolean",
    "char",
    "byte",
    "short",
    "String",
    "Integer",
    "Long",
    "Double",
    "Float",
    "Boolean",
    "Character",
    "List",
    "ArrayList",
    "LinkedList",
    "Map",
    "HashMap",
    "TreeMap",
    "Set",
    "HashSet",
    "TreeSet",
    "Queue",
    "Stack",
    "PriorityQueue",
    "Deque",
    "Arrays",
    "Collections",
    "Math",
    "System",
    "StringBuilder",
    "TreeNode",
    "ListNode",
    "TrieNode",
  ];

  let result = "";
  let i = 0;
  while (i < code.length) {
    // Comments: //
    if (code[i] === "/" && code[i + 1] === "/") {
      const end = code.indexOf("\n", i);
      const commentEnd = end === -1 ? code.length : end;
      result += `<span class="comment">${escapeHtml(code.slice(i, commentEnd))}</span>`;
      i = commentEnd;
      continue;
    }
    // Comments: /* */
    if (code[i] === "/" && code[i + 1] === "*") {
      const end = code.indexOf("*/", i + 2);
      const commentEnd = end === -1 ? code.length : end + 2;
      result += `<span class="comment">${escapeHtml(code.slice(i, commentEnd))}</span>`;
      i = commentEnd;
      continue;
    }
    // Strings
    if (code[i] === '"') {
      let j = i + 1;
      while (j < code.length && code[j] !== '"') {
        if (code[j] === "\\") j++;
        j++;
      }
      result += `<span class="string">${escapeHtml(code.slice(i, j + 1))}</span>`;
      i = j + 1;
      continue;
    }
    // Chars
    if (code[i] === "'") {
      let j = i + 1;
      while (j < code.length && code[j] !== "'") {
        if (code[j] === "\\") j++;
        j++;
      }
      result += `<span class="string">${escapeHtml(code.slice(i, j + 1))}</span>`;
      i = j + 1;
      continue;
    }
    // Annotations
    if (code[i] === "@") {
      let j = i + 1;
      while (j < code.length && /\w/.test(code[j])) j++;
      result += `<span class="annotation">${escapeHtml(code.slice(i, j))}</span>`;
      i = j;
      continue;
    }
    // Numbers
    if (/\d/.test(code[i]) && (i === 0 || !/\w/.test(code[i - 1]))) {
      let j = i;
      while (j < code.length && /[\d.xXabcdefABCDEFL]/.test(code[j])) j++;
      result += `<span class="number">${escapeHtml(code.slice(i, j))}</span>`;
      i = j;
      continue;
    }
    // Words
    if (/[a-zA-Z_]/.test(code[i])) {
      let j = i;
      while (j < code.length && /\w/.test(code[j])) j++;
      const word = code.slice(i, j);
      if (keywords.includes(word)) {
        result += `<span class="keyword">${word}</span>`;
      } else if (types.includes(word)) {
        result += `<span class="type">${word}</span>`;
      } else if (j < code.length && code[j] === "(") {
        result += `<span class="method">${word}</span>`;
      } else {
        result += escapeHtml(word);
      }
      i = j;
      continue;
    }
    result += escapeHtml(code[i]);
    i++;
  }
  return result;
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// ─── Difficulty Badge ────────────────────────────────────────
function DifficultyBadge({ difficulty }: { difficulty: string }) {
  const colors: Record<string, string> = {
    Easy: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    Medium: "bg-amber-500/15 text-amber-400 border-amber-500/30",
    Hard: "bg-red-500/15 text-red-400 border-red-500/30",
  };
  return (
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${colors[difficulty]}`}>
      {difficulty}
    </span>
  );
}

// ─── Code Block ──────────────────────────────────────────────
function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const highlighted = useMemo(() => highlightJava(code), [code]);

  return (
    <div className="code-block relative group">
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#161b22] border-b border-[#1e2733]">
        <div className="flex items-center gap-2">
          <Code2 size={14} className="text-gray-500" />
          <span className="text-xs text-gray-500 font-medium">Java</span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs text-gray-400 hover:text-white hover:bg-white/10 cursor-pointer"
        >
          {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre>
        <code dangerouslySetInnerHTML={{ __html: highlighted }} />
      </pre>
    </div>
  );
}

// ─── Question View ───────────────────────────────────────────
function QuestionView({ question }: { question: Question }) {
  return (
    <div className="space-y-6 animate-in">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2 flex-wrap">
          <h2 className="text-2xl font-bold text-white">{question.title}</h2>
          <DifficultyBadge difficulty={question.difficulty} />
        </div>
      </div>

      {/* Problem Description */}
      <div className="bg-[#111111] border border-[#1e1e1e] rounded-xl p-5">
        <div className="flex items-center gap-2 mb-3">
          <BookOpen size={16} className="text-blue-400" />
          <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider">Problem Description</h3>
        </div>
        <pre className="text-gray-300 whitespace-pre-wrap text-sm leading-relaxed font-sans">{question.description}</pre>
      </div>

      {/* Approach */}
      <div className="bg-[#111111] border border-[#1e1e1e] rounded-xl p-5">
        <div className="flex items-center gap-2 mb-3">
          <Lightbulb size={16} className="text-yellow-400" />
          <h3 className="text-sm font-semibold text-yellow-400 uppercase tracking-wider">Approach & Intuition</h3>
        </div>
        <pre className="text-gray-300 whitespace-pre-wrap text-sm leading-relaxed font-sans">{question.approach}</pre>
      </div>

      {/* Complexity */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-[#111111] border border-[#1e1e1e] rounded-xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
            <Clock size={18} className="text-cyan-400" />
          </div>
          <div>
            <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Time Complexity</div>
            <div className="text-white font-mono text-sm mt-0.5">{question.timeComplexity}</div>
          </div>
        </div>
        <div className="bg-[#111111] border border-[#1e1e1e] rounded-xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
            <HardDrive size={18} className="text-purple-400" />
          </div>
          <div>
            <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Space Complexity</div>
            <div className="text-white font-mono text-sm mt-0.5">{question.spaceComplexity}</div>
          </div>
        </div>
      </div>

      {/* Code Solution */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Code2 size={16} className="text-green-400" />
          <h3 className="text-sm font-semibold text-green-400 uppercase tracking-wider">Java Solution</h3>
        </div>
        <CodeBlock code={question.javaCode} />
      </div>
    </div>
  );
}

// ─── Sidebar ─────────────────────────────────────────────────
function Sidebar({
  selectedId,
  onSelect,
  searchQuery,
  filteredTopics,
}: {
  selectedId: string;
  onSelect: (id: string) => void;
  searchQuery: string;
  filteredTopics: Topic[];
}) {
  const [expandedTopics, setExpandedTopics] = useState<Set<string>>(() => {
    const set = new Set<string>();
    if (dsaData.length > 0) {
      set.add(dsaData[0].id);
      if (dsaData[0].subtopics.length > 0) {
        set.add(dsaData[0].subtopics[0].id);
      }
    }
    return set;
  });

  useEffect(() => {
    if (searchQuery) {
      const all = new Set<string>();
      filteredTopics.forEach((t) => {
        all.add(t.id);
        t.subtopics.forEach((st) => all.add(st.id));
      });
      setExpandedTopics(all);
    }
  }, [searchQuery, filteredTopics]);

  const toggleTopic = (id: string) => {
    setExpandedTopics((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const countQuestions = (topic: Topic) =>
    topic.subtopics.reduce((sum, st) => sum + st.questions.length, 0);

  return (
    <nav className="h-full overflow-y-auto py-4 px-3">
      <div className="mb-6 px-2">
        <h1 className="text-lg font-bold text-white flex items-center gap-2">
          <span className="text-2xl">🚀</span>
          <span>
            Striver's A2Z
            <br />
            <span className="text-sm font-medium text-gray-400">DSA Sheet</span>
          </span>
        </h1>
      </div>

      <div className="space-y-1">
        {filteredTopics.map((topic) => (
          <div key={topic.id}>
            {/* Topic Header */}
            <button
              onClick={() => toggleTopic(topic.id)}
              className="w-full flex items-center gap-2 px-2 py-2 rounded-lg text-left hover:bg-white/5 cursor-pointer group"
            >
              <span className="text-gray-500 flex-shrink-0">
                {expandedTopics.has(topic.id) ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
              </span>
              <span className="text-base">{topic.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="text-xs text-gray-500 font-medium">Step {topic.step}</div>
                <div className="text-sm font-medium text-gray-200 truncate group-hover:text-white">
                  {topic.title}
                </div>
              </div>
              <span className="text-[10px] font-semibold text-gray-600 bg-white/5 rounded-full px-1.5 py-0.5 flex-shrink-0">
                {countQuestions(topic)}
              </span>
            </button>

            {/* Subtopics */}
            {expandedTopics.has(topic.id) && (
              <div className="ml-5 pl-3 tree-line">
                {topic.subtopics.map((subtopic) => (
                  <div key={subtopic.id}>
                    <button
                      onClick={() => toggleTopic(subtopic.id)}
                      className="w-full flex items-center gap-2 px-2 py-1.5 rounded-md text-left hover:bg-white/5 cursor-pointer"
                    >
                      <span className="text-gray-600">
                        {expandedTopics.has(subtopic.id) ? (
                          <ChevronDown size={12} />
                        ) : (
                          <ChevronRight size={12} />
                        )}
                      </span>
                      <span className="text-xs font-medium text-gray-400 truncate">{subtopic.title}</span>
                      <span className="text-[10px] text-gray-600 ml-auto flex-shrink-0">
                        {subtopic.questions.length}
                      </span>
                    </button>

                    {/* Questions */}
                    {expandedTopics.has(subtopic.id) && (
                      <div className="ml-4 pl-3 tree-line space-y-0.5 py-1">
                        {subtopic.questions.map((q) => (
                          <button
                            key={q.id}
                            onClick={() => onSelect(q.id)}
                            className={`w-full text-left px-2.5 py-1.5 rounded-md text-xs truncate cursor-pointer ${
                              selectedId === q.id
                                ? "bg-blue-500/15 text-blue-400 font-medium"
                                : "text-gray-500 hover:text-gray-300 hover:bg-white/5"
                            }`}
                          >
                            <span className="flex items-center gap-2">
                              <span
                                className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                                  q.difficulty === "Easy"
                                    ? "bg-emerald-500"
                                    : q.difficulty === "Medium"
                                      ? "bg-amber-500"
                                      : "bg-red-500"
                                }`}
                              />
                              <span className="truncate">{q.title}</span>
                            </span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredTopics.length === 0 && (
        <div className="text-center text-gray-600 py-8 text-sm">No results found</div>
      )}
    </nav>
  );
}

// ─── Main App ────────────────────────────────────────────────
export default function App() {
  const [selectedId, setSelectedId] = useState(
    dsaData[0]?.subtopics[0]?.questions[0]?.id || ""
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  // Filter topics based on search
  const filteredTopics = useMemo(() => {
    if (!searchQuery.trim()) return dsaData;
    const q = searchQuery.toLowerCase();
    return dsaData
      .map((topic) => ({
        ...topic,
        subtopics: topic.subtopics
          .map((st) => ({
            ...st,
            questions: st.questions.filter(
              (question) =>
                question.title.toLowerCase().includes(q) ||
                question.description.toLowerCase().includes(q) ||
                question.difficulty.toLowerCase().includes(q) ||
                topic.title.toLowerCase().includes(q) ||
                st.title.toLowerCase().includes(q)
            ),
          }))
          .filter((st) => st.questions.length > 0),
      }))
      .filter((t) => t.subtopics.length > 0);
  }, [searchQuery]);

  // Find selected question
  const selectedQuestion = useMemo(() => {
    for (const topic of dsaData) {
      for (const st of topic.subtopics) {
        for (const q of st.questions) {
          if (q.id === selectedId) return q;
        }
      }
    }
    return null;
  }, [selectedId]);

  // Find current topic/subtopic for breadcrumb
  const breadcrumb = useMemo(() => {
    for (const topic of dsaData) {
      for (const st of topic.subtopics) {
        for (const q of st.questions) {
          if (q.id === selectedId) {
            return { topic: topic.title, subtopic: st.title, step: topic.step, icon: topic.icon };
          }
        }
      }
    }
    return null;
  }, [selectedId]);

  // Navigation: prev/next question
  const allQuestions = useMemo(() => {
    const all: Question[] = [];
    dsaData.forEach((t) => t.subtopics.forEach((st) => st.questions.forEach((q) => all.push(q))));
    return all;
  }, []);

  const currentIndex = allQuestions.findIndex((q) => q.id === selectedId);

  const goToQuestion = useCallback(
    (id: string) => {
      setSelectedId(id);
      setSidebarOpen(false);
      mainRef.current?.scrollTo({ top: 0, behavior: "smooth" });
    },
    []
  );

  const handleScroll = () => {
    if (mainRef.current) {
      setShowScrollTop(mainRef.current.scrollTop > 400);
    }
  };

  // Stats
  const totalQuestions = allQuestions.length;
  const easyCount = allQuestions.filter((q) => q.difficulty === "Easy").length;
  const mediumCount = allQuestions.filter((q) => q.difficulty === "Medium").length;
  const hardCount = allQuestions.filter((q) => q.difficulty === "Hard").length;

  return (
    <div className="flex h-screen bg-[#0a0a0a] overflow-hidden">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/60 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-40 w-80 bg-[#0f0f0f] border-r border-[#1a1a1a] flex flex-col transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Search */}
        <div className="p-3 border-b border-[#1a1a1a]">
          <div className="relative">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-[#161616] border border-[#252525] rounded-lg text-sm text-gray-200 placeholder-gray-600 outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-400 cursor-pointer"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="px-5 py-3 border-b border-[#1a1a1a] flex items-center gap-3 text-[11px] font-medium">
          <span className="text-gray-500">{totalQuestions} Problems</span>
          <span className="text-gray-700">|</span>
          <span className="text-emerald-500">{easyCount} Easy</span>
          <span className="text-amber-500">{mediumCount} Med</span>
          <span className="text-red-500">{hardCount} Hard</span>
        </div>

        {/* Tree Navigation */}
        <div className="flex-1 overflow-hidden">
          <Sidebar
            selectedId={selectedId}
            onSelect={goToQuestion}
            searchQuery={searchQuery}
            filteredTopics={filteredTopics}
          />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="flex items-center gap-3 px-4 lg:px-6 py-3 border-b border-[#1a1a1a] bg-[#0a0a0a]/80 backdrop-blur-md sticky top-0 z-20">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/5 text-gray-400 cursor-pointer"
          >
            <Menu size={20} />
          </button>

          {breadcrumb && (
            <div className="flex items-center gap-2 text-sm min-w-0">
              <span className="text-base">{breadcrumb.icon}</span>
              <span className="text-gray-500 hidden sm:inline">Step {breadcrumb.step}:</span>
              <span className="text-gray-400 hidden sm:inline truncate">{breadcrumb.topic}</span>
              <ChevronRight size={14} className="text-gray-600 hidden sm:inline flex-shrink-0" />
              <span className="text-gray-300 truncate">{breadcrumb.subtopic}</span>
            </div>
          )}

          <div className="ml-auto flex items-center gap-2 text-xs text-gray-600 flex-shrink-0">
            {currentIndex >= 0 && (
              <span>
                {currentIndex + 1} / {totalQuestions}
              </span>
            )}
          </div>
        </header>

        {/* Content */}
        <div ref={mainRef} className="flex-1 overflow-y-auto" onScroll={handleScroll}>
          <div className="max-w-4xl mx-auto px-4 lg:px-8 py-8">
            {selectedQuestion ? (
              <>
                <QuestionView question={selectedQuestion} />

                {/* Navigation */}
                <div className="flex items-center justify-between mt-10 pt-6 border-t border-[#1a1a1a]">
                  <button
                    onClick={() => currentIndex > 0 && goToQuestion(allQuestions[currentIndex - 1].id)}
                    disabled={currentIndex <= 0}
                    className={`px-4 py-2 rounded-lg text-sm font-medium ${
                      currentIndex <= 0
                        ? "text-gray-700 cursor-not-allowed"
                        : "text-gray-400 hover:text-white hover:bg-white/5 cursor-pointer"
                    }`}
                  >
                    ← Previous
                  </button>
                  <button
                    onClick={() =>
                      currentIndex < allQuestions.length - 1 &&
                      goToQuestion(allQuestions[currentIndex + 1].id)
                    }
                    disabled={currentIndex >= allQuestions.length - 1}
                    className={`px-4 py-2 rounded-lg text-sm font-medium ${
                      currentIndex >= allQuestions.length - 1
                        ? "text-gray-700 cursor-not-allowed"
                        : "text-gray-400 hover:text-white hover:bg-white/5 cursor-pointer"
                    }`}
                  >
                    Next →
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center text-gray-600 py-20">
                <BookOpen size={48} className="mx-auto mb-4 opacity-30" />
                <p className="text-lg">Select a question from the sidebar</p>
              </div>
            )}
          </div>
        </div>

        {/* Scroll to top */}
        {showScrollTop && (
          <button
            onClick={() => mainRef.current?.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-500 z-50 cursor-pointer"
          >
            <ArrowUp size={18} />
          </button>
        )}
      </main>
    </div>
  );
}
