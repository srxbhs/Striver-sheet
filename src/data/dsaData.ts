export interface Question {
  id: string;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  description: string;
  approach: string;
  timeComplexity: string;
  spaceComplexity: string;
  javaCode: string;
}

export interface SubTopic {
  id: string;
  title: string;
  questions: Question[];
}

export interface Topic {
  id: string;
  step: number;
  title: string;
  icon: string;
  subtopics: SubTopic[];
}

export const dsaData: Topic[] = [
  // ─── STEP 1: LEARN THE BASICS ─────────────────────────────
  {
    id: "basics",
    step: 1,
    title: "Learn the Basics",
    icon: "📘",
    subtopics: [
      {
        id: "patterns",
        title: "Pattern Problems",
        questions: [
          {
            id: "pattern-triangle",
            title: "Print Triangle Star Pattern",
            difficulty: "Easy",
            description:
              "Print a right-angled triangle star pattern of N rows.\n\nExample (N=5):\n*\n* *\n* * *\n* * * *\n* * * * *",
            approach:
              "Use nested loops. The outer loop runs from 1 to N (rows). The inner loop runs from 1 to the current row number, printing a star each time.",
            timeComplexity: "O(N²)",
            spaceComplexity: "O(1)",
            javaCode: `public class Pattern {
    public static void printTriangle(int n) {
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        printTriangle(5);
    }
}`,
          },
          {
            id: "pattern-pyramid",
            title: "Print Pyramid Star Pattern",
            difficulty: "Easy",
            description:
              "Print a centered pyramid star pattern of N rows.\n\nExample (N=5):\n        *\n      * * *\n    * * * * *\n  * * * * * * *\n* * * * * * * * *",
            approach:
              "For each row i, print (N-i) spaces followed by (2*i - 1) stars. The spaces create the centering effect.",
            timeComplexity: "O(N²)",
            spaceComplexity: "O(1)",
            javaCode: `public class Pyramid {
    public static void printPyramid(int n) {
        for (int i = 1; i <= n; i++) {
            // Print spaces
            for (int j = 1; j <= n - i; j++) {
                System.out.print(" ");
            }
            // Print stars
            for (int j = 1; j <= 2 * i - 1; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        printPyramid(5);
    }
}`,
          },
          {
            id: "pattern-diamond",
            title: "Print Diamond Star Pattern",
            difficulty: "Easy",
            description:
              "Print a diamond shape star pattern of N rows (upper + lower half).",
            approach:
              "Combine a pyramid (upper half) and an inverted pyramid (lower half). Upper: for row i, print (N-i) spaces + (2i-1) stars. Lower: mirror the upper half.",
            timeComplexity: "O(N²)",
            spaceComplexity: "O(1)",
            javaCode: `public class Diamond {
    public static void printDiamond(int n) {
        // Upper half
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n - i; j++)
                System.out.print(" ");
            for (int j = 1; j <= 2 * i - 1; j++)
                System.out.print("*");
            System.out.println();
        }
        // Lower half
        for (int i = n - 1; i >= 1; i--) {
            for (int j = 1; j <= n - i; j++)
                System.out.print(" ");
            for (int j = 1; j <= 2 * i - 1; j++)
                System.out.print("*");
            System.out.println();
        }
    }

    public static void main(String[] args) {
        printDiamond(5);
    }
}`,
          },
        ],
      },
      {
        id: "basic-maths",
        title: "Basic Maths",
        questions: [
          {
            id: "count-digits",
            title: "Count Digits in a Number",
            difficulty: "Easy",
            description:
              "Given a number N, count the number of digits in N.\n\nExample:\nInput: N = 12345\nOutput: 5",
            approach:
              "Repeatedly divide the number by 10 and increment a counter until the number becomes 0. Alternatively, use Math.log10(N) + 1.",
            timeComplexity: "O(log₁₀N)",
            spaceComplexity: "O(1)",
            javaCode: `public class CountDigits {
    public static int countDigits(int n) {
        int count = 0;
        while (n > 0) {
            count++;
            n /= 10;
        }
        return count;
    }

    // Alternative using logarithm
    public static int countDigitsLog(int n) {
        return (int) Math.log10(n) + 1;
    }

    public static void main(String[] args) {
        System.out.println(countDigits(12345)); // 5
    }
}`,
          },
          {
            id: "reverse-number",
            title: "Reverse a Number",
            difficulty: "Easy",
            description:
              "Given a number N, reverse the digits of N.\n\nExample:\nInput: N = 12345\nOutput: 54321",
            approach:
              "Extract the last digit using modulo 10, build the reversed number by multiplying the result by 10 and adding the extracted digit, then divide the original number by 10.",
            timeComplexity: "O(log₁₀N)",
            spaceComplexity: "O(1)",
            javaCode: `public class ReverseNumber {
    public static int reverse(int n) {
        int reversed = 0;
        while (n != 0) {
            int digit = n % 10;
            reversed = reversed * 10 + digit;
            n /= 10;
        }
        return reversed;
    }

    public static void main(String[] args) {
        System.out.println(reverse(12345)); // 54321
    }
}`,
          },
          {
            id: "palindrome-number",
            title: "Check if a Number is Palindrome",
            difficulty: "Easy",
            description:
              "Check whether a given number is a palindrome.\n\nExample:\nInput: N = 121\nOutput: true (121 reversed is 121)",
            approach:
              "Reverse the number and compare it with the original. If they are equal, the number is a palindrome.",
            timeComplexity: "O(log₁₀N)",
            spaceComplexity: "O(1)",
            javaCode: `public class PalindromeNumber {
    public static boolean isPalindrome(int n) {
        if (n < 0) return false;
        int original = n;
        int reversed = 0;
        while (n > 0) {
            reversed = reversed * 10 + n % 10;
            n /= 10;
        }
        return original == reversed;
    }

    public static void main(String[] args) {
        System.out.println(isPalindrome(121));  // true
        System.out.println(isPalindrome(123));  // false
    }
}`,
          },
          {
            id: "gcd-hcf",
            title: "GCD / HCF of Two Numbers",
            difficulty: "Easy",
            description:
              "Find the Greatest Common Divisor (GCD) of two numbers.\n\nExample:\nInput: a = 12, b = 8\nOutput: 4",
            approach:
              "Use the Euclidean algorithm: repeatedly replace the larger number with the remainder of dividing the larger by the smaller until one becomes 0. The other number is the GCD.",
            timeComplexity: "O(log(min(a, b)))",
            spaceComplexity: "O(1)",
            javaCode: `public class GCD {
    // Euclidean Algorithm (Iterative)
    public static int gcd(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    // Recursive approach
    public static int gcdRecursive(int a, int b) {
        if (b == 0) return a;
        return gcdRecursive(b, a % b);
    }

    public static void main(String[] args) {
        System.out.println(gcd(12, 8));  // 4
        System.out.println(gcd(36, 24)); // 12
    }
}`,
          },
          {
            id: "armstrong-number",
            title: "Armstrong Number",
            difficulty: "Easy",
            description:
              "Check whether a given number is an Armstrong number. An Armstrong number of n digits is a number where the sum of each digit raised to the power of n equals the number itself.\n\nExample:\n153 = 1³ + 5³ + 3³ = 1 + 125 + 27 = 153 → Armstrong",
            approach:
              "Count the digits, then sum each digit raised to the power of the digit count. Compare the sum with the original number.",
            timeComplexity: "O(log₁₀N)",
            spaceComplexity: "O(1)",
            javaCode: `public class Armstrong {
    public static boolean isArmstrong(int n) {
        int original = n;
        int digits = String.valueOf(n).length();
        int sum = 0;

        while (n > 0) {
            int digit = n % 10;
            sum += Math.pow(digit, digits);
            n /= 10;
        }

        return sum == original;
    }

    public static void main(String[] args) {
        System.out.println(isArmstrong(153));  // true
        System.out.println(isArmstrong(370));  // true
        System.out.println(isArmstrong(123));  // false
    }
}`,
          },
          {
            id: "prime-number",
            title: "Check if a Number is Prime",
            difficulty: "Easy",
            description:
              "Given a number N, check if it is a prime number.\n\nExample:\nInput: N = 7 → Output: true\nInput: N = 10 → Output: false",
            approach:
              "A prime number is only divisible by 1 and itself. Check divisibility from 2 to √N. If any number divides N, it's not prime.",
            timeComplexity: "O(√N)",
            spaceComplexity: "O(1)",
            javaCode: `public class PrimeCheck {
    public static boolean isPrime(int n) {
        if (n <= 1) return false;
        if (n <= 3) return true;
        if (n % 2 == 0 || n % 3 == 0) return false;

        for (int i = 5; i * i <= n; i += 6) {
            if (n % i == 0 || n % (i + 2) == 0)
                return false;
        }
        return true;
    }

    public static void main(String[] args) {
        System.out.println(isPrime(7));   // true
        System.out.println(isPrime(10));  // false
        System.out.println(isPrime(29));  // true
    }
}`,
          },
        ],
      },
      {
        id: "basic-recursion",
        title: "Basic Recursion",
        questions: [
          {
            id: "print-1-to-n",
            title: "Print 1 to N using Recursion",
            difficulty: "Easy",
            description:
              "Print numbers from 1 to N using recursion.\n\nExample:\nInput: N = 5\nOutput: 1 2 3 4 5",
            approach:
              "Use a recursive function that first calls itself with i-1 (to print smaller numbers first), then prints i. Base case: if i < 1, return.",
            timeComplexity: "O(N)",
            spaceComplexity: "O(N) - recursion stack",
            javaCode: `public class Print1ToN {
    public static void printNumbers(int n) {
        if (n < 1) return;
        printNumbers(n - 1);
        System.out.print(n + " ");
    }

    public static void main(String[] args) {
        printNumbers(5); // 1 2 3 4 5
    }
}`,
          },
          {
            id: "factorial",
            title: "Factorial of N",
            difficulty: "Easy",
            description:
              "Find the factorial of a number N using recursion.\n\nExample:\nInput: N = 5\nOutput: 120 (5! = 5×4×3×2×1)",
            approach:
              "Base case: if N <= 1, return 1. Recursive case: return N * factorial(N-1).",
            timeComplexity: "O(N)",
            spaceComplexity: "O(N) - recursion stack",
            javaCode: `public class Factorial {
    public static long factorial(int n) {
        if (n <= 1) return 1;
        return n * factorial(n - 1);
    }

    public static void main(String[] args) {
        System.out.println(factorial(5));  // 120
        System.out.println(factorial(10)); // 3628800
    }
}`,
          },
          {
            id: "fibonacci",
            title: "Fibonacci Number",
            difficulty: "Easy",
            description:
              "Find the Nth Fibonacci number.\n\nFibonacci series: 0, 1, 1, 2, 3, 5, 8, 13, 21...\n\nExample:\nInput: N = 6\nOutput: 8",
            approach:
              "Base cases: F(0) = 0, F(1) = 1. Recursive: F(N) = F(N-1) + F(N-2). For optimization, use iterative approach or memoization.",
            timeComplexity: "O(N) iterative / O(2^N) naive recursive",
            spaceComplexity: "O(1) iterative / O(N) recursive",
            javaCode: `public class Fibonacci {
    // Iterative (Optimal)
    public static int fibonacci(int n) {
        if (n <= 1) return n;
        int prev2 = 0, prev1 = 1;
        for (int i = 2; i <= n; i++) {
            int curr = prev1 + prev2;
            prev2 = prev1;
            prev1 = curr;
        }
        return prev1;
    }

    // Recursive with Memoization
    public static int fibMemo(int n, int[] dp) {
        if (n <= 1) return n;
        if (dp[n] != -1) return dp[n];
        return dp[n] = fibMemo(n - 1, dp) + fibMemo(n - 2, dp);
    }

    public static void main(String[] args) {
        System.out.println(fibonacci(6));  // 8
        System.out.println(fibonacci(10)); // 55
    }
}`,
          },
        ],
      },
      {
        id: "basic-hashing",
        title: "Basic Hashing",
        questions: [
          {
            id: "frequency-count",
            title: "Count Frequency of Elements",
            difficulty: "Easy",
            description:
              "Given an array, count the frequency of each element.\n\nExample:\nInput: [1, 2, 3, 1, 2, 1]\nOutput: 1→3, 2→2, 3→1",
            approach:
              "Use a HashMap to store each element as a key and its frequency as value. Iterate through the array and update counts.",
            timeComplexity: "O(N)",
            spaceComplexity: "O(N)",
            javaCode: `import java.util.HashMap;
import java.util.Map;

public class FrequencyCount {
    public static Map<Integer, Integer> countFrequency(int[] arr) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int num : arr) {
            map.put(num, map.getOrDefault(num, 0) + 1);
        }
        return map;
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 1, 2, 1};
        Map<Integer, Integer> freq = countFrequency(arr);
        for (Map.Entry<Integer, Integer> entry : freq.entrySet()) {
            System.out.println(entry.getKey() + " → " + entry.getValue());
        }
        // Output: 1 → 3, 2 → 2, 3 → 1
    }
}`,
          },
          {
            id: "highest-lowest-freq",
            title: "Highest / Lowest Frequency Element",
            difficulty: "Easy",
            description:
              "Given an array, find the element with the highest and lowest frequency.\n\nExample:\nInput: [1, 2, 3, 1, 2, 1]\nOutput: Highest freq: 1 (3 times), Lowest freq: 3 (1 time)",
            approach:
              "First build a frequency map. Then iterate through the map to find the element with the maximum and minimum frequency.",
            timeComplexity: "O(N)",
            spaceComplexity: "O(N)",
            javaCode: `import java.util.HashMap;
import java.util.Map;

public class HighLowFreq {
    public static void findHighLowFreq(int[] arr) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int num : arr) {
            map.put(num, map.getOrDefault(num, 0) + 1);
        }

        int maxFreq = 0, minFreq = Integer.MAX_VALUE;
        int maxElem = 0, minElem = 0;

        for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
            if (entry.getValue() > maxFreq) {
                maxFreq = entry.getValue();
                maxElem = entry.getKey();
            }
            if (entry.getValue() < minFreq) {
                minFreq = entry.getValue();
                minElem = entry.getKey();
            }
        }

        System.out.println("Highest frequency: " + maxElem
            + " (" + maxFreq + " times)");
        System.out.println("Lowest frequency: " + minElem
            + " (" + minFreq + " times)");
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 1, 2, 1};
        findHighLowFreq(arr);
    }
}`,
          },
        ],
      },
    ],
  },

  // ─── STEP 2: SORTING ──────────────────────────────────────
  {
    id: "sorting",
    step: 2,
    title: "Sorting Techniques",
    icon: "🔄",
    subtopics: [
      {
        id: "sorting-algorithms",
        title: "Sorting Algorithms",
        questions: [
          {
            id: "selection-sort",
            title: "Selection Sort",
            difficulty: "Easy",
            description:
              "Implement Selection Sort.\n\nSelection Sort works by repeatedly finding the minimum element from the unsorted part and putting it at the beginning.\n\nExample:\nInput: [64, 25, 12, 22, 11]\nOutput: [11, 12, 22, 25, 64]",
            approach:
              "For each position i from 0 to N-2, find the minimum element in the subarray from i to N-1, then swap it with the element at position i.",
            timeComplexity: "O(N²)",
            spaceComplexity: "O(1)",
            javaCode: `public class SelectionSort {
    public static void selectionSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            int minIdx = i;
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIdx]) {
                    minIdx = j;
                }
            }
            // Swap
            int temp = arr[minIdx];
            arr[minIdx] = arr[i];
            arr[i] = temp;
        }
    }

    public static void main(String[] args) {
        int[] arr = {64, 25, 12, 22, 11};
        selectionSort(arr);
        for (int num : arr) System.out.print(num + " ");
        // Output: 11 12 22 25 64
    }
}`,
          },
          {
            id: "bubble-sort",
            title: "Bubble Sort",
            difficulty: "Easy",
            description:
              "Implement Bubble Sort.\n\nBubble Sort repeatedly swaps adjacent elements if they are in the wrong order.\n\nExample:\nInput: [64, 34, 25, 12, 22]\nOutput: [12, 22, 25, 34, 64]",
            approach:
              "Use nested loops. In each pass, compare adjacent elements and swap if needed. After each pass, the largest unsorted element 'bubbles' to its correct position. Optimize by stopping early if no swaps occur in a pass.",
            timeComplexity: "O(N²) worst, O(N) best (already sorted)",
            spaceComplexity: "O(1)",
            javaCode: `public class BubbleSort {
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            boolean swapped = false;
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swapped = true;
                }
            }
            if (!swapped) break; // Already sorted
        }
    }

    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22};
        bubbleSort(arr);
        for (int num : arr) System.out.print(num + " ");
        // Output: 12 22 25 34 64
    }
}`,
          },
          {
            id: "insertion-sort",
            title: "Insertion Sort",
            difficulty: "Easy",
            description:
              "Implement Insertion Sort.\n\nInsertion Sort builds the sorted array one item at a time by inserting each element into its correct position.\n\nExample:\nInput: [12, 11, 13, 5, 6]\nOutput: [5, 6, 11, 12, 13]",
            approach:
              "Start from index 1. For each element, compare it with elements before it and shift larger elements one position ahead. Insert the element at the correct position.",
            timeComplexity: "O(N²) worst, O(N) best",
            spaceComplexity: "O(1)",
            javaCode: `public class InsertionSort {
    public static void insertionSort(int[] arr) {
        int n = arr.length;
        for (int i = 1; i < n; i++) {
            int key = arr[i];
            int j = i - 1;

            // Shift elements greater than key
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key;
        }
    }

    public static void main(String[] args) {
        int[] arr = {12, 11, 13, 5, 6};
        insertionSort(arr);
        for (int num : arr) System.out.print(num + " ");
        // Output: 5 6 11 12 13
    }
}`,
          },
          {
            id: "merge-sort",
            title: "Merge Sort",
            difficulty: "Medium",
            description:
              "Implement Merge Sort using divide and conquer.\n\nMerge Sort divides the array into halves, recursively sorts them, and merges the sorted halves.\n\nExample:\nInput: [38, 27, 43, 3, 9, 82, 10]\nOutput: [3, 9, 10, 27, 38, 43, 82]",
            approach:
              "1. Divide the array into two halves.\n2. Recursively sort each half.\n3. Merge the two sorted halves using a two-pointer technique.\n\nBase case: array of size 1 is already sorted.",
            timeComplexity: "O(N log N)",
            spaceComplexity: "O(N)",
            javaCode: `public class MergeSort {
    public static void mergeSort(int[] arr, int left, int right) {
        if (left >= right) return;

        int mid = left + (right - left) / 2;
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }

    private static void merge(int[] arr, int left, int mid, int right) {
        int n1 = mid - left + 1;
        int n2 = right - mid;

        int[] leftArr = new int[n1];
        int[] rightArr = new int[n2];

        System.arraycopy(arr, left, leftArr, 0, n1);
        System.arraycopy(arr, mid + 1, rightArr, 0, n2);

        int i = 0, j = 0, k = left;

        while (i < n1 && j < n2) {
            if (leftArr[i] <= rightArr[j]) {
                arr[k++] = leftArr[i++];
            } else {
                arr[k++] = rightArr[j++];
            }
        }

        while (i < n1) arr[k++] = leftArr[i++];
        while (j < n2) arr[k++] = rightArr[j++];
    }

    public static void main(String[] args) {
        int[] arr = {38, 27, 43, 3, 9, 82, 10};
        mergeSort(arr, 0, arr.length - 1);
        for (int num : arr) System.out.print(num + " ");
        // Output: 3 9 10 27 38 43 82
    }
}`,
          },
          {
            id: "quick-sort",
            title: "Quick Sort",
            difficulty: "Medium",
            description:
              "Implement Quick Sort using divide and conquer with partitioning.\n\nQuick Sort picks a pivot element and partitions the array around it.\n\nExample:\nInput: [10, 7, 8, 9, 1, 5]\nOutput: [1, 5, 7, 8, 9, 10]",
            approach:
              "1. Choose a pivot (last element here).\n2. Partition: place all elements smaller than pivot to the left, larger to the right.\n3. Recursively sort the left and right partitions.",
            timeComplexity: "O(N log N) average, O(N²) worst",
            spaceComplexity: "O(log N) - recursion stack",
            javaCode: `public class QuickSort {
    public static void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            int pivotIdx = partition(arr, low, high);
            quickSort(arr, low, pivotIdx - 1);
            quickSort(arr, pivotIdx + 1, high);
        }
    }

    private static int partition(int[] arr, int low, int high) {
        int pivot = arr[high];
        int i = low - 1;

        for (int j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }

        int temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;

        return i + 1;
    }

    public static void main(String[] args) {
        int[] arr = {10, 7, 8, 9, 1, 5};
        quickSort(arr, 0, arr.length - 1);
        for (int num : arr) System.out.print(num + " ");
        // Output: 1 5 7 8 9 10
    }
}`,
          },
        ],
      },
    ],
  },

  // ─── STEP 3: ARRAYS ───────────────────────────────────────
  {
    id: "arrays",
    step: 3,
    title: "Arrays",
    icon: "📊",
    subtopics: [
      {
        id: "arrays-easy",
        title: "Easy Array Problems",
        questions: [
          {
            id: "largest-element",
            title: "Largest Element in an Array",
            difficulty: "Easy",
            description:
              "Find the largest element in the given array.\n\nExample:\nInput: [3, 5, 1, 8, 2]\nOutput: 8",
            approach:
              "Initialize a variable max with the first element. Traverse the array and update max whenever a larger element is found.",
            timeComplexity: "O(N)",
            spaceComplexity: "O(1)",
            javaCode: `public class LargestElement {
    public static int findLargest(int[] arr) {
        int max = arr[0];
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    }

    public static void main(String[] args) {
        int[] arr = {3, 5, 1, 8, 2};
        System.out.println(findLargest(arr)); // 8
    }
}`,
          },
          {
            id: "second-largest",
            title: "Second Largest Element",
            difficulty: "Easy",
            description:
              "Find the second largest element in an array without sorting.\n\nExample:\nInput: [12, 35, 1, 10, 34, 1]\nOutput: 34",
            approach:
              "Maintain two variables: largest and secondLargest. In a single pass, update them appropriately.",
            timeComplexity: "O(N)",
            spaceComplexity: "O(1)",
            javaCode: `public class SecondLargest {
    public static int findSecondLargest(int[] arr) {
        int largest = Integer.MIN_VALUE;
        int secondLargest = Integer.MIN_VALUE;

        for (int num : arr) {
            if (num > largest) {
                secondLargest = largest;
                largest = num;
            } else if (num > secondLargest && num != largest) {
                secondLargest = num;
            }
        }

        return secondLargest;
    }

    public static void main(String[] args) {
        int[] arr = {12, 35, 1, 10, 34, 1};
        System.out.println(findSecondLargest(arr)); // 34
    }
}`,
          },
          {
            id: "check-sorted",
            title: "Check if Array is Sorted",
            difficulty: "Easy",
            description:
              "Check whether the given array is sorted in non-decreasing order.\n\nExample:\nInput: [1, 2, 3, 4, 5] → true\nInput: [1, 3, 2, 4] → false",
            approach:
              "Traverse the array and check if each element is greater than or equal to the previous element. If any element violates this, return false.",
            timeComplexity: "O(N)",
            spaceComplexity: "O(1)",
            javaCode: `public class CheckSorted {
    public static boolean isSorted(int[] arr) {
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] < arr[i - 1]) {
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        System.out.println(isSorted(new int[]{1, 2, 3, 4, 5})); // true
        System.out.println(isSorted(new int[]{1, 3, 2, 4}));     // false
    }
}`,
          },
          {
            id: "remove-duplicates-sorted",
            title: "Remove Duplicates from Sorted Array",
            difficulty: "Easy",
            description:
              "Given a sorted array, remove duplicates in-place and return the new length.\n\nExample:\nInput: [1, 1, 2, 2, 3, 4, 4]\nOutput: 4 (array becomes [1, 2, 3, 4, ...])",
            approach:
              "Use a two-pointer approach. Pointer i tracks the position of unique elements. Pointer j scans through the array. When arr[j] differs from arr[i], increment i and copy arr[j] to arr[i].",
            timeComplexity: "O(N)",
            spaceComplexity: "O(1)",
            javaCode: `public class RemoveDuplicates {
    public static int removeDuplicates(int[] arr) {
        if (arr.length == 0) return 0;

        int i = 0; // Pointer for unique elements
        for (int j = 1; j < arr.length; j++) {
            if (arr[j] != arr[i]) {
                i++;
                arr[i] = arr[j];
            }
        }
        return i + 1; // Length of unique elements
    }

    public static void main(String[] args) {
        int[] arr = {1, 1, 2, 2, 3, 4, 4};
        int len = removeDuplicates(arr);
        System.out.println("New length: " + len); // 4
        for (int i = 0; i < len; i++) {
            System.out.print(arr[i] + " "); // 1 2 3 4
        }
    }
}`,
          },
          {
            id: "move-zeros",
            title: "Move All Zeros to End",
            difficulty: "Easy",
            description:
              "Move all zeros in the array to the end while maintaining the relative order of non-zero elements.\n\nExample:\nInput: [0, 1, 0, 3, 12]\nOutput: [1, 3, 12, 0, 0]",
            approach:
              "Use a two-pointer approach. Pointer j tracks the position to place the next non-zero element. When a non-zero element is found, swap it with position j and increment j.",
            timeComplexity: "O(N)",
            spaceComplexity: "O(1)",
            javaCode: `public class MoveZeros {
    public static void moveZeroes(int[] arr) {
        int j = 0; // Position for next non-zero

        for (int i = 0; i < arr.length; i++) {
            if (arr[i] != 0) {
                // Swap arr[i] and arr[j]
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                j++;
            }
        }
    }

    public static void main(String[] args) {
        int[] arr = {0, 1, 0, 3, 12};
        moveZeroes(arr);
        for (int num : arr) System.out.print(num + " ");
        // Output: 1 3 12 0 0
    }
}`,
          },
        ],
      },
      {
        id: "arrays-medium",
        title: "Medium Array Problems",
        questions: [
          {
            id: "two-sum",
            title: "Two Sum",
            difficulty: "Medium",
            description:
              "Given an array and a target sum, find two numbers that add up to the target. Return their indices.\n\nExample:\nInput: nums = [2, 7, 11, 15], target = 9\nOutput: [0, 1] (because 2 + 7 = 9)",
            approach:
              "Use a HashMap to store each number and its index. For each element, check if (target - current) exists in the map. If yes, return both indices.",
            timeComplexity: "O(N)",
            spaceComplexity: "O(N)",
            javaCode: `import java.util.HashMap;

public class TwoSum {
    public static int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> map = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[]{map.get(complement), i};
            }
            map.put(nums[i], i);
        }

        return new int[]{-1, -1}; // No solution found
    }

    public static void main(String[] args) {
        int[] nums = {2, 7, 11, 15};
        int[] result = twoSum(nums, 9);
        System.out.println("[" + result[0] + ", " + result[1] + "]");
        // Output: [0, 1]
    }
}`,
          },
          {
            id: "sort-colors",
            title: "Sort Colors (Dutch National Flag)",
            difficulty: "Medium",
            description:
              "Given an array with 0s, 1s, and 2s, sort it in a single pass.\n\nExample:\nInput: [2, 0, 2, 1, 1, 0]\nOutput: [0, 0, 1, 1, 2, 2]",
            approach:
              "Dutch National Flag Algorithm: Use three pointers - low (for 0s), mid (current), high (for 2s). If arr[mid]=0, swap with low and advance both. If arr[mid]=1, just advance mid. If arr[mid]=2, swap with high and decrement high.",
            timeComplexity: "O(N)",
            spaceComplexity: "O(1)",
            javaCode: `public class SortColors {
    public static void sortColors(int[] arr) {
        int low = 0, mid = 0, high = arr.length - 1;

        while (mid <= high) {
            if (arr[mid] == 0) {
                // Swap arr[low] and arr[mid]
                int temp = arr[low];
                arr[low] = arr[mid];
                arr[mid] = temp;
                low++;
                mid++;
            } else if (arr[mid] == 1) {
                mid++;
            } else { // arr[mid] == 2
                int temp = arr[mid];
                arr[mid] = arr[high];
                arr[high] = temp;
                high--;
            }
        }
    }

    public static void main(String[] args) {
        int[] arr = {2, 0, 2, 1, 1, 0};
        sortColors(arr);
        for (int num : arr) System.out.print(num + " ");
        // Output: 0 0 1 1 2 2
    }
}`,
          },
          {
            id: "majority-element",
            title: "Majority Element (> N/2 times)",
            difficulty: "Medium",
            description:
              "Find the element that appears more than N/2 times in the array.\n\nExample:\nInput: [2, 2, 1, 1, 1, 2, 2]\nOutput: 2",
            approach:
              "Moore's Voting Algorithm: Maintain a candidate and a count. If count is 0, set current element as candidate. If current element equals candidate, increment count, otherwise decrement. The final candidate is the majority element.",
            timeComplexity: "O(N)",
            spaceComplexity: "O(1)",
            javaCode: `public class MajorityElement {
    public static int majorityElement(int[] nums) {
        // Moore's Voting Algorithm
        int candidate = nums[0];
        int count = 1;

        for (int i = 1; i < nums.length; i++) {
            if (count == 0) {
                candidate = nums[i];
                count = 1;
            } else if (nums[i] == candidate) {
                count++;
            } else {
                count--;
            }
        }

        // Verify (optional if guaranteed to exist)
        count = 0;
        for (int num : nums) {
            if (num == candidate) count++;
        }

        return count > nums.length / 2 ? candidate : -1;
    }

    public static void main(String[] args) {
        int[] nums = {2, 2, 1, 1, 1, 2, 2};
        System.out.println(majorityElement(nums)); // 2
    }
}`,
          },
          {
            id: "kadanes-algorithm",
            title: "Maximum Subarray Sum (Kadane's Algorithm)",
            difficulty: "Medium",
            description:
              "Find the contiguous subarray with the maximum sum.\n\nExample:\nInput: [-2, 1, -3, 4, -1, 2, 1, -5, 4]\nOutput: 6 (subarray [4, -1, 2, 1])",
            approach:
              "Kadane's Algorithm: Maintain currentSum and maxSum. Add each element to currentSum. If currentSum becomes negative, reset it to 0. Update maxSum with the maximum of maxSum and currentSum.",
            timeComplexity: "O(N)",
            spaceComplexity: "O(1)",
            javaCode: `public class KadanesAlgorithm {
    public static int maxSubArraySum(int[] nums) {
        int maxSum = Integer.MIN_VALUE;
        int currentSum = 0;

        for (int num : nums) {
            currentSum += num;
            maxSum = Math.max(maxSum, currentSum);
            if (currentSum < 0) {
                currentSum = 0;
            }
        }

        return maxSum;
    }

    // To also print the subarray
    public static void maxSubArrayWithIndices(int[] nums) {
        int maxSum = Integer.MIN_VALUE;
        int currentSum = 0;
        int start = 0, ansStart = 0, ansEnd = 0;

        for (int i = 0; i < nums.length; i++) {
            if (currentSum == 0) start = i;
            currentSum += nums[i];

            if (currentSum > maxSum) {
                maxSum = currentSum;
                ansStart = start;
                ansEnd = i;
            }

            if (currentSum < 0) currentSum = 0;
        }

        System.out.println("Max sum: " + maxSum);
        System.out.print("Subarray: ");
        for (int i = ansStart; i <= ansEnd; i++) {
            System.out.print(nums[i] + " ");
        }
    }

    public static void main(String[] args) {
        int[] nums = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
        System.out.println(maxSubArraySum(nums)); // 6
        maxSubArrayWithIndices(nums); // Subarray: 4 -1 2 1
    }
}`,
          },
          {
            id: "best-time-buy-sell",
            title: "Best Time to Buy and Sell Stock",
            difficulty: "Medium",
            description:
              "Given an array of stock prices, find the maximum profit from buying and selling once.\n\nExample:\nInput: [7, 1, 5, 3, 6, 4]\nOutput: 5 (buy at 1, sell at 6)",
            approach:
              "Track the minimum price seen so far. For each day, calculate the profit if selling today (current price - min price) and update the maximum profit.",
            timeComplexity: "O(N)",
            spaceComplexity: "O(1)",
            javaCode: `public class BuyAndSellStock {
    public static int maxProfit(int[] prices) {
        int minPrice = Integer.MAX_VALUE;
        int maxProfit = 0;

        for (int price : prices) {
            minPrice = Math.min(minPrice, price);
            maxProfit = Math.max(maxProfit, price - minPrice);
        }

        return maxProfit;
    }

    public static void main(String[] args) {
        int[] prices = {7, 1, 5, 3, 6, 4};
        System.out.println(maxProfit(prices)); // 5
    }
}`,
          },
          {
            id: "rearrange-alternating",
            title: "Rearrange Array Elements by Sign",
            difficulty: "Medium",
            description:
              "Given an array of equal positive and negative numbers, rearrange them so that positives and negatives appear alternately, starting with positive.\n\nExample:\nInput: [3, 1, -2, -5, 2, -4]\nOutput: [3, -2, 1, -5, 2, -4]",
            approach:
              "Use two pointers: posIdx starting at 0 (for even indices) and negIdx starting at 1 (for odd indices). Place positive numbers at even indices and negative numbers at odd indices.",
            timeComplexity: "O(N)",
            spaceComplexity: "O(N)",
            javaCode: `public class RearrangeBySign {
    public static int[] rearrangeBySign(int[] arr) {
        int n = arr.length;
        int[] result = new int[n];
        int posIdx = 0, negIdx = 1;

        for (int num : arr) {
            if (num > 0) {
                result[posIdx] = num;
                posIdx += 2;
            } else {
                result[negIdx] = num;
                negIdx += 2;
            }
        }

        return result;
    }

    public static void main(String[] args) {
        int[] arr = {3, 1, -2, -5, 2, -4};
        int[] result = rearrangeBySign(arr);
        for (int num : result) System.out.print(num + " ");
        // Output: 3 -2 1 -5 2 -4
    }
}`,
          },
        ],
      },
      {
        id: "arrays-hard",
        title: "Hard Array Problems",
        questions: [
          {
            id: "three-sum",
            title: "3Sum - Find Triplets with Sum Zero",
            difficulty: "Hard",
            description:
              "Given an array, find all unique triplets that sum to zero.\n\nExample:\nInput: [-1, 0, 1, 2, -1, -4]\nOutput: [[-1, -1, 2], [-1, 0, 1]]",
            approach:
              "Sort the array. Fix one element and use two pointers (left and right) to find pairs that sum to the negative of the fixed element. Skip duplicates to ensure unique triplets.",
            timeComplexity: "O(N²)",
            spaceComplexity: "O(1) excluding output",
            javaCode: `import java.util.*;

public class ThreeSum {
    public static List<List<Integer>> threeSum(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        Arrays.sort(nums);

        for (int i = 0; i < nums.length - 2; i++) {
            // Skip duplicates for first element
            if (i > 0 && nums[i] == nums[i - 1]) continue;

            int left = i + 1, right = nums.length - 1;
            int target = -nums[i];

            while (left < right) {
                int sum = nums[left] + nums[right];

                if (sum == target) {
                    result.add(Arrays.asList(
                        nums[i], nums[left], nums[right]
                    ));
                    // Skip duplicates
                    while (left < right && nums[left] == nums[left + 1])
                        left++;
                    while (left < right && nums[right] == nums[right - 1])
                        right--;
                    left++;
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }

        return result;
    }

    public static void main(String[] args) {
        int[] nums = {-1, 0, 1, 2, -1, -4};
        System.out.println(threeSum(nums));
        // Output: [[-1, -1, 2], [-1, 0, 1]]
    }
}`,
          },
          {
            id: "merge-overlapping-intervals",
            title: "Merge Overlapping Intervals",
            difficulty: "Hard",
            description:
              "Given an array of intervals, merge all overlapping intervals.\n\nExample:\nInput: [[1,3], [2,6], [8,10], [15,18]]\nOutput: [[1,6], [8,10], [15,18]]",
            approach:
              "Sort intervals by start time. Iterate through intervals and merge if the current interval overlaps with the previous one (current start <= previous end). Otherwise, add the current interval to the result.",
            timeComplexity: "O(N log N)",
            spaceComplexity: "O(N)",
            javaCode: `import java.util.*;

public class MergeIntervals {
    public static int[][] merge(int[][] intervals) {
        if (intervals.length <= 1) return intervals;

        // Sort by start time
        Arrays.sort(intervals, (a, b) -> a[0] - b[0]);

        List<int[]> merged = new ArrayList<>();
        merged.add(intervals[0]);

        for (int i = 1; i < intervals.length; i++) {
            int[] last = merged.get(merged.size() - 1);

            if (intervals[i][0] <= last[1]) {
                // Overlapping - merge
                last[1] = Math.max(last[1], intervals[i][1]);
            } else {
                // Non-overlapping - add new interval
                merged.add(intervals[i]);
            }
        }

        return merged.toArray(new int[merged.size()][]);
    }

    public static void main(String[] args) {
        int[][] intervals = {{1,3}, {2,6}, {8,10}, {15,18}};
        int[][] result = merge(intervals);

        for (int[] interval : result) {
            System.out.print("[" + interval[0] + "," + interval[1] + "] ");
        }
        // Output: [1,6] [8,10] [15,18]
    }
}`,
          },
          {
            id: "count-inversions",
            title: "Count Inversions (Merge Sort)",
            difficulty: "Hard",
            description:
              "Count the number of inversions in an array. An inversion is a pair (i, j) where i < j and arr[i] > arr[j].\n\nExample:\nInput: [5, 3, 2, 4, 1]\nOutput: 8",
            approach:
              "Use modified Merge Sort. During the merge step, when an element from the right subarray is smaller than an element from the left subarray, all remaining elements in the left subarray form inversions with it.",
            timeComplexity: "O(N log N)",
            spaceComplexity: "O(N)",
            javaCode: `public class CountInversions {
    static int count = 0;

    public static int countInversions(int[] arr) {
        count = 0;
        mergeSort(arr, 0, arr.length - 1);
        return count;
    }

    private static void mergeSort(int[] arr, int left, int right) {
        if (left >= right) return;
        int mid = left + (right - left) / 2;
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }

    private static void merge(int[] arr, int left, int mid, int right) {
        int[] temp = new int[right - left + 1];
        int i = left, j = mid + 1, k = 0;

        while (i <= mid && j <= right) {
            if (arr[i] <= arr[j]) {
                temp[k++] = arr[i++];
            } else {
                // All elements from i to mid are inversions
                count += (mid - i + 1);
                temp[k++] = arr[j++];
            }
        }

        while (i <= mid) temp[k++] = arr[i++];
        while (j <= right) temp[k++] = arr[j++];

        System.arraycopy(temp, 0, arr, left, temp.length);
    }

    public static void main(String[] args) {
        int[] arr = {5, 3, 2, 4, 1};
        System.out.println(countInversions(arr)); // 8
    }
}`,
          },
        ],
      },
    ],
  },

  // ─── STEP 4: BINARY SEARCH ────────────────────────────────
  {
    id: "binary-search",
    step: 4,
    title: "Binary Search",
    icon: "🔍",
    subtopics: [
      {
        id: "bs-1d",
        title: "BS on 1D Arrays",
        questions: [
          {
            id: "binary-search-basic",
            title: "Binary Search (Iterative & Recursive)",
            difficulty: "Easy",
            description:
              "Given a sorted array, search for a target element and return its index. Return -1 if not found.\n\nExample:\nInput: arr = [1, 3, 5, 7, 9, 11], target = 7\nOutput: 3",
            approach:
              "Maintain low and high pointers. Calculate mid. If arr[mid] == target, return mid. If target < arr[mid], search left half. Otherwise, search right half.",
            timeComplexity: "O(log N)",
            spaceComplexity: "O(1) iterative / O(log N) recursive",
            javaCode: `public class BinarySearch {
    // Iterative approach
    public static int binarySearch(int[] arr, int target) {
        int low = 0, high = arr.length - 1;

        while (low <= high) {
            int mid = low + (high - low) / 2;

            if (arr[mid] == target) return mid;
            else if (arr[mid] < target) low = mid + 1;
            else high = mid - 1;
        }

        return -1; // Not found
    }

    // Recursive approach
    public static int binarySearchRecursive(int[] arr, int low, int high, int target) {
        if (low > high) return -1;

        int mid = low + (high - low) / 2;

        if (arr[mid] == target) return mid;
        else if (arr[mid] < target)
            return binarySearchRecursive(arr, mid + 1, high, target);
        else
            return binarySearchRecursive(arr, low, mid - 1, target);
    }

    public static void main(String[] args) {
        int[] arr = {1, 3, 5, 7, 9, 11};
        System.out.println(binarySearch(arr, 7));  // 3
        System.out.println(binarySearch(arr, 4));  // -1
    }
}`,
          },
          {
            id: "lower-bound",
            title: "Lower Bound & Upper Bound",
            difficulty: "Easy",
            description:
              "Lower Bound: Find the smallest index where arr[i] >= target.\nUpper Bound: Find the smallest index where arr[i] > target.\n\nExample:\narr = [1, 2, 2, 3, 3, 5], target = 3\nLower Bound: 3 (index of first 3)\nUpper Bound: 5 (index of 5)",
            approach:
              "Modified binary search. For lower bound, when arr[mid] >= target, ans = mid and search left. For upper bound, when arr[mid] > target, ans = mid and search left.",
            timeComplexity: "O(log N)",
            spaceComplexity: "O(1)",
            javaCode: `public class Bounds {
    public static int lowerBound(int[] arr, int target) {
        int low = 0, high = arr.length - 1;
        int ans = arr.length; // Default: no element >= target

        while (low <= high) {
            int mid = low + (high - low) / 2;
            if (arr[mid] >= target) {
                ans = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return ans;
    }

    public static int upperBound(int[] arr, int target) {
        int low = 0, high = arr.length - 1;
        int ans = arr.length;

        while (low <= high) {
            int mid = low + (high - low) / 2;
            if (arr[mid] > target) {
                ans = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return ans;
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 2, 3, 3, 5};
        System.out.println("Lower bound of 3: " + lowerBound(arr, 3)); // 3
        System.out.println("Upper bound of 3: " + upperBound(arr, 3)); // 5
    }
}`,
          },
          {
            id: "search-rotated-sorted",
            title: "Search in Rotated Sorted Array",
            difficulty: "Medium",
            description:
              "Search for a target in a rotated sorted array (no duplicates).\n\nExample:\nInput: nums = [4, 5, 6, 7, 0, 1, 2], target = 0\nOutput: 4",
            approach:
              "Modified binary search. At each step, determine which half is sorted. If target lies in the sorted half, search there. Otherwise, search the other half.",
            timeComplexity: "O(log N)",
            spaceComplexity: "O(1)",
            javaCode: `public class SearchRotatedArray {
    public static int search(int[] nums, int target) {
        int low = 0, high = nums.length - 1;

        while (low <= high) {
            int mid = low + (high - low) / 2;

            if (nums[mid] == target) return mid;

            // Left half is sorted
            if (nums[low] <= nums[mid]) {
                if (target >= nums[low] && target < nums[mid]) {
                    high = mid - 1;
                } else {
                    low = mid + 1;
                }
            }
            // Right half is sorted
            else {
                if (target > nums[mid] && target <= nums[high]) {
                    low = mid + 1;
                } else {
                    high = mid - 1;
                }
            }
        }

        return -1;
    }

    public static void main(String[] args) {
        int[] nums = {4, 5, 6, 7, 0, 1, 2};
        System.out.println(search(nums, 0)); // 4
        System.out.println(search(nums, 3)); // -1
    }
}`,
          },
          {
            id: "find-peak-element",
            title: "Find Peak Element",
            difficulty: "Medium",
            description:
              "A peak element is greater than its neighbors. Find any peak element's index.\n\nExample:\nInput: [1, 2, 3, 1]\nOutput: 2 (element 3 is a peak)",
            approach:
              "Binary search: If arr[mid] > arr[mid+1], a peak exists on the left side (including mid). Otherwise, a peak exists on the right side.",
            timeComplexity: "O(log N)",
            spaceComplexity: "O(1)",
            javaCode: `public class FindPeakElement {
    public static int findPeakElement(int[] nums) {
        int low = 0, high = nums.length - 1;

        while (low < high) {
            int mid = low + (high - low) / 2;

            if (nums[mid] > nums[mid + 1]) {
                // Peak is on the left side (including mid)
                high = mid;
            } else {
                // Peak is on the right side
                low = mid + 1;
            }
        }

        return low;
    }

    public static void main(String[] args) {
        int[] nums = {1, 2, 3, 1};
        System.out.println(findPeakElement(nums)); // 2
    }
}`,
          },
        ],
      },
      {
        id: "bs-answers",
        title: "BS on Answers",
        questions: [
          {
            id: "sqrt-number",
            title: "Square Root of a Number",
            difficulty: "Medium",
            description:
              "Find the integer square root of a number N (floor value).\n\nExample:\nInput: N = 28\nOutput: 5 (√28 ≈ 5.29, floor = 5)",
            approach:
              "Binary search from 1 to N. If mid*mid <= N, it's a potential answer; search right for a larger value. If mid*mid > N, search left.",
            timeComplexity: "O(log N)",
            spaceComplexity: "O(1)",
            javaCode: `public class SqrtNumber {
    public static int mySqrt(int n) {
        if (n < 2) return n;

        long low = 1, high = n;
        long ans = 1;

        while (low <= high) {
            long mid = low + (high - low) / 2;

            if (mid * mid <= n) {
                ans = mid;
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return (int) ans;
    }

    public static void main(String[] args) {
        System.out.println(mySqrt(28)); // 5
        System.out.println(mySqrt(36)); // 6
        System.out.println(mySqrt(1));  // 1
    }
}`,
          },
          {
            id: "koko-eating-bananas",
            title: "Koko Eating Bananas",
            difficulty: "Medium",
            description:
              "Koko has N piles of bananas and H hours. She eats at speed K bananas/hour (one pile at a time). Find the minimum K so she can eat all bananas in H hours.\n\nExample:\nInput: piles = [3, 6, 7, 11], h = 8\nOutput: 4",
            approach:
              "Binary search on the answer K. The range is [1, max(piles)]. For each mid value, check if Koko can finish all piles within H hours. Use ceiling division for each pile.",
            timeComplexity: "O(N × log(max(piles)))",
            spaceComplexity: "O(1)",
            javaCode: `public class KokoEatingBananas {
    public static int minEatingSpeed(int[] piles, int h) {
        int low = 1, high = 0;
        for (int pile : piles) high = Math.max(high, pile);

        int ans = high;

        while (low <= high) {
            int mid = low + (high - low) / 2;

            if (canFinish(piles, mid, h)) {
                ans = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        return ans;
    }

    private static boolean canFinish(int[] piles, int speed, int h) {
        long hours = 0;
        for (int pile : piles) {
            hours += (pile + speed - 1) / speed; // Ceiling division
        }
        return hours <= h;
    }

    public static void main(String[] args) {
        int[] piles = {3, 6, 7, 11};
        System.out.println(minEatingSpeed(piles, 8)); // 4
    }
}`,
          },
        ],
      },
    ],
  },

  // ─── STEP 5: STRINGS ──────────────────────────────────────
  {
    id: "strings",
    step: 5,
    title: "Strings",
    icon: "📝",
    subtopics: [
      {
        id: "strings-basic",
        title: "Basic String Problems",
        questions: [
          {
            id: "reverse-string",
            title: "Reverse a String",
            difficulty: "Easy",
            description:
              "Reverse a given string in-place.\n\nExample:\nInput: \"hello\"\nOutput: \"olleh\"",
            approach:
              "Use two pointers: one at the start and one at the end. Swap characters and move both pointers inward until they meet.",
            timeComplexity: "O(N)",
            spaceComplexity: "O(1)",
            javaCode: `public class ReverseString {
    public static void reverseString(char[] s) {
        int left = 0, right = s.length - 1;
        while (left < right) {
            char temp = s[left];
            s[left] = s[right];
            s[right] = temp;
            left++;
            right--;
        }
    }

    public static void main(String[] args) {
        char[] s = "hello".toCharArray();
        reverseString(s);
        System.out.println(new String(s)); // "olleh"
    }
}`,
          },
          {
            id: "palindrome-string",
            title: "Check if String is Palindrome",
            difficulty: "Easy",
            description:
              "Check if a given string is a palindrome (considering only alphanumeric characters).\n\nExample:\nInput: \"A man, a plan, a canal: Panama\"\nOutput: true",
            approach:
              "Use two pointers from both ends. Skip non-alphanumeric characters. Compare characters (case-insensitive).",
            timeComplexity: "O(N)",
            spaceComplexity: "O(1)",
            javaCode: `public class PalindromeString {
    public static boolean isPalindrome(String s) {
        int left = 0, right = s.length() - 1;

        while (left < right) {
            while (left < right && !Character.isLetterOrDigit(s.charAt(left)))
                left++;
            while (left < right && !Character.isLetterOrDigit(s.charAt(right)))
                right--;

            if (Character.toLowerCase(s.charAt(left))
                != Character.toLowerCase(s.charAt(right))) {
                return false;
            }
            left++;
            right--;
        }

        return true;
    }

    public static void main(String[] args) {
        System.out.println(isPalindrome("A man, a plan, a canal: Panama"));
        // Output: true
        System.out.println(isPalindrome("race a car"));
        // Output: false
    }
}`,
          },
          {
            id: "longest-common-prefix",
            title: "Longest Common Prefix",
            difficulty: "Easy",
            description:
              "Find the longest common prefix among an array of strings.\n\nExample:\nInput: [\"flower\", \"flow\", \"flight\"]\nOutput: \"fl\"",
            approach:
              "Take the first string as the initial prefix. Compare it with each subsequent string and shorten the prefix until it matches or becomes empty.",
            timeComplexity: "O(S) where S = sum of all characters",
            spaceComplexity: "O(1)",
            javaCode: `public class LongestCommonPrefix {
    public static String longestCommonPrefix(String[] strs) {
        if (strs == null || strs.length == 0) return "";

        String prefix = strs[0];

        for (int i = 1; i < strs.length; i++) {
            while (strs[i].indexOf(prefix) != 0) {
                prefix = prefix.substring(0, prefix.length() - 1);
                if (prefix.isEmpty()) return "";
            }
        }

        return prefix;
    }

    public static void main(String[] args) {
        String[] strs = {"flower", "flow", "flight"};
        System.out.println(longestCommonPrefix(strs)); // "fl"
    }
}`,
          },
          {
            id: "isomorphic-strings",
            title: "Isomorphic Strings",
            difficulty: "Easy",
            description:
              "Check if two strings are isomorphic. Two strings are isomorphic if characters in one can be mapped to characters in the other (one-to-one mapping).\n\nExample:\nInput: s = \"egg\", t = \"add\" → true\nInput: s = \"foo\", t = \"bar\" → false",
            approach:
              "Use two HashMaps for bidirectional character mapping. For each character pair, check if the mapping is consistent in both directions.",
            timeComplexity: "O(N)",
            spaceComplexity: "O(N)",
            javaCode: `import java.util.HashMap;

public class IsomorphicStrings {
    public static boolean isIsomorphic(String s, String t) {
        if (s.length() != t.length()) return false;

        HashMap<Character, Character> sToT = new HashMap<>();
        HashMap<Character, Character> tToS = new HashMap<>();

        for (int i = 0; i < s.length(); i++) {
            char sc = s.charAt(i), tc = t.charAt(i);

            if (sToT.containsKey(sc) && sToT.get(sc) != tc) return false;
            if (tToS.containsKey(tc) && tToS.get(tc) != sc) return false;

            sToT.put(sc, tc);
            tToS.put(tc, sc);
        }

        return true;
    }

    public static void main(String[] args) {
        System.out.println(isIsomorphic("egg", "add")); // true
        System.out.println(isIsomorphic("foo", "bar")); // false
    }
}`,
          },
        ],
      },
      {
        id: "strings-medium",
        title: "Medium String Problems",
        questions: [
          {
            id: "longest-palindromic-substring",
            title: "Longest Palindromic Substring",
            difficulty: "Medium",
            description:
              "Find the longest palindromic substring in a given string.\n\nExample:\nInput: \"babad\"\nOutput: \"bab\" or \"aba\"",
            approach:
              "Expand Around Center: For each character (and between each pair of characters), expand outward while characters match. Track the longest palindrome found.",
            timeComplexity: "O(N²)",
            spaceComplexity: "O(1)",
            javaCode: `public class LongestPalindromicSubstring {
    static int start = 0, maxLen = 1;

    public static String longestPalindrome(String s) {
        if (s.length() < 2) return s;

        start = 0;
        maxLen = 1;

        for (int i = 0; i < s.length(); i++) {
            expandAroundCenter(s, i, i);     // Odd length
            expandAroundCenter(s, i, i + 1); // Even length
        }

        return s.substring(start, start + maxLen);
    }

    private static void expandAroundCenter(String s, int left, int right) {
        while (left >= 0 && right < s.length()
               && s.charAt(left) == s.charAt(right)) {
            if (right - left + 1 > maxLen) {
                start = left;
                maxLen = right - left + 1;
            }
            left--;
            right++;
        }
    }

    public static void main(String[] args) {
        System.out.println(longestPalindrome("babad")); // "bab" or "aba"
        System.out.println(longestPalindrome("cbbd"));  // "bb"
    }
}`,
          },
          {
            id: "string-to-integer-atoi",
            title: "String to Integer (atoi)",
            difficulty: "Medium",
            description:
              "Implement the atoi function that converts a string to an integer.\n\nHandle: leading whitespaces, +/- sign, numeric digits, overflow.\n\nExample:\nInput: \"   -42\"\nOutput: -42",
            approach:
              "Skip whitespaces, check for sign, process digits one by one. Check for overflow before adding each digit.",
            timeComplexity: "O(N)",
            spaceComplexity: "O(1)",
            javaCode: `public class StringToInteger {
    public static int myAtoi(String s) {
        int i = 0, n = s.length();
        int sign = 1;
        int result = 0;

        // Skip whitespaces
        while (i < n && s.charAt(i) == ' ') i++;

        // Check sign
        if (i < n && (s.charAt(i) == '+' || s.charAt(i) == '-')) {
            sign = s.charAt(i) == '-' ? -1 : 1;
            i++;
        }

        // Process digits
        while (i < n && Character.isDigit(s.charAt(i))) {
            int digit = s.charAt(i) - '0';

            // Check overflow
            if (result > (Integer.MAX_VALUE - digit) / 10) {
                return sign == 1 ? Integer.MAX_VALUE : Integer.MIN_VALUE;
            }

            result = result * 10 + digit;
            i++;
        }

        return sign * result;
    }

    public static void main(String[] args) {
        System.out.println(myAtoi("   -42"));     // -42
        System.out.println(myAtoi("4193 word"));  // 4193
        System.out.println(myAtoi("words 987"));  // 0
    }
}`,
          },
        ],
      },
    ],
  },

  // ─── STEP 6: LINKED LIST ──────────────────────────────────
  {
    id: "linked-list",
    step: 6,
    title: "Linked List",
    icon: "🔗",
    subtopics: [
      {
        id: "ll-single",
        title: "Singly Linked List",
        questions: [
          {
            id: "reverse-linked-list",
            title: "Reverse a Linked List",
            difficulty: "Easy",
            description:
              "Reverse a singly linked list.\n\nExample:\nInput: 1 → 2 → 3 → 4 → 5\nOutput: 5 → 4 → 3 → 2 → 1",
            approach:
              "Iterative: Use three pointers (prev, curr, next). At each step, reverse the current node's pointer. Move all three pointers forward.",
            timeComplexity: "O(N)",
            spaceComplexity: "O(1)",
            javaCode: `class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

public class ReverseLinkedList {
    // Iterative
    public static ListNode reverseList(ListNode head) {
        ListNode prev = null;
        ListNode curr = head;

        while (curr != null) {
            ListNode next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        return prev;
    }

    // Recursive
    public static ListNode reverseListRecursive(ListNode head) {
        if (head == null || head.next == null) return head;

        ListNode newHead = reverseListRecursive(head.next);
        head.next.next = head;
        head.next = null;

        return newHead;
    }

    public static void main(String[] args) {
        ListNode head = new ListNode(1);
        head.next = new ListNode(2);
        head.next.next = new ListNode(3);
        head.next.next.next = new ListNode(4);
        head.next.next.next.next = new ListNode(5);

        ListNode reversed = reverseList(head);
        while (reversed != null) {
            System.out.print(reversed.val + " → ");
            reversed = reversed.next;
        }
        // Output: 5 → 4 → 3 → 2 → 1 →
    }
}`,
          },
          {
            id: "middle-linked-list",
            title: "Middle of Linked List",
            difficulty: "Easy",
            description:
              "Find the middle node of a linked list. If two middle nodes, return the second one.\n\nExample:\nInput: 1 → 2 → 3 → 4 → 5\nOutput: Node 3",
            approach:
              "Tortoise and Hare: Use slow (1 step) and fast (2 steps) pointers. When fast reaches the end, slow is at the middle.",
            timeComplexity: "O(N)",
            spaceComplexity: "O(1)",
            javaCode: `public class MiddleOfLinkedList {
    public static ListNode middleNode(ListNode head) {
        ListNode slow = head;
        ListNode fast = head;

        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow;
    }

    public static void main(String[] args) {
        ListNode head = new ListNode(1);
        head.next = new ListNode(2);
        head.next.next = new ListNode(3);
        head.next.next.next = new ListNode(4);
        head.next.next.next.next = new ListNode(5);

        ListNode mid = middleNode(head);
        System.out.println("Middle: " + mid.val); // 3
    }
}`,
          },
          {
            id: "detect-cycle-ll",
            title: "Detect Cycle in Linked List",
            difficulty: "Medium",
            description:
              "Detect if a linked list has a cycle. Also find the starting node of the cycle.\n\nExample:\n3 → 2 → 0 → -4 → (back to 2) → cycle detected, starts at node 2",
            approach:
              "Floyd's Cycle Detection: Use slow (1 step) and fast (2 steps) pointers. If they meet, cycle exists. To find start: move one pointer back to head, advance both by 1 step until they meet at the cycle start.",
            timeComplexity: "O(N)",
            spaceComplexity: "O(1)",
            javaCode: `public class DetectCycle {
    // Detect if cycle exists
    public static boolean hasCycle(ListNode head) {
        ListNode slow = head, fast = head;

        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) return true;
        }

        return false;
    }

    // Find the starting node of the cycle
    public static ListNode detectCycleStart(ListNode head) {
        ListNode slow = head, fast = head;

        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;

            if (slow == fast) {
                // Move one pointer to head
                slow = head;
                while (slow != fast) {
                    slow = slow.next;
                    fast = fast.next;
                }
                return slow; // Start of cycle
            }
        }

        return null; // No cycle
    }

    public static void main(String[] args) {
        ListNode head = new ListNode(3);
        ListNode node2 = new ListNode(2);
        head.next = node2;
        head.next.next = new ListNode(0);
        head.next.next.next = new ListNode(-4);
        head.next.next.next.next = node2; // Cycle

        System.out.println("Has cycle: " + hasCycle(head)); // true
        System.out.println("Cycle starts at: "
            + detectCycleStart(head).val); // 2
    }
}`,
          },
          {
            id: "merge-two-sorted-ll",
            title: "Merge Two Sorted Linked Lists",
            difficulty: "Easy",
            description:
              "Merge two sorted linked lists into one sorted list.\n\nExample:\nInput: 1→2→4, 1→3→4\nOutput: 1→1→2→3→4→4",
            approach:
              "Use a dummy node and pointer. Compare heads of both lists, append the smaller one to the result. Advance the pointer of the list from which the node was taken.",
            timeComplexity: "O(N + M)",
            spaceComplexity: "O(1)",
            javaCode: `public class MergeTwoSortedLists {
    public static ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        ListNode dummy = new ListNode(0);
        ListNode current = dummy;

        while (l1 != null && l2 != null) {
            if (l1.val <= l2.val) {
                current.next = l1;
                l1 = l1.next;
            } else {
                current.next = l2;
                l2 = l2.next;
            }
            current = current.next;
        }

        // Attach remaining nodes
        current.next = (l1 != null) ? l1 : l2;

        return dummy.next;
    }

    public static void main(String[] args) {
        ListNode l1 = new ListNode(1);
        l1.next = new ListNode(2);
        l1.next.next = new ListNode(4);

        ListNode l2 = new ListNode(1);
        l2.next = new ListNode(3);
        l2.next.next = new ListNode(4);

        ListNode merged = mergeTwoLists(l1, l2);
        while (merged != null) {
            System.out.print(merged.val + " → ");
            merged = merged.next;
        }
        // Output: 1 → 1 → 2 → 3 → 4 → 4 →
    }
}`,
          },
        ],
      },
    ],
  },

  // ─── STEP 7: RECURSION & BACKTRACKING ─────────────────────
  {
    id: "recursion-backtracking",
    step: 7,
    title: "Recursion & Backtracking",
    icon: "🔁",
    subtopics: [
      {
        id: "subsequences",
        title: "Subsequences Pattern",
        questions: [
          {
            id: "generate-subsets",
            title: "Generate All Subsets (Power Set)",
            difficulty: "Medium",
            description:
              "Generate all possible subsets of a given set of distinct integers.\n\nExample:\nInput: [1, 2, 3]\nOutput: [[], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]]",
            approach:
              "Use recursion. At each index, either include the element or exclude it. This gives 2^N subsets. Alternatively, use bit manipulation.",
            timeComplexity: "O(2^N × N)",
            spaceComplexity: "O(2^N × N)",
            javaCode: `import java.util.*;

public class GenerateSubsets {
    public static List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        generateSubsets(nums, 0, new ArrayList<>(), result);
        return result;
    }

    private static void generateSubsets(int[] nums, int index,
            List<Integer> current, List<List<Integer>> result) {
        // Add current subset
        result.add(new ArrayList<>(current));

        for (int i = index; i < nums.length; i++) {
            current.add(nums[i]);         // Include
            generateSubsets(nums, i + 1, current, result);
            current.remove(current.size() - 1); // Backtrack
        }
    }

    public static void main(String[] args) {
        int[] nums = {1, 2, 3};
        List<List<Integer>> subsets = subsets(nums);
        System.out.println(subsets);
    }
}`,
          },
          {
            id: "combination-sum",
            title: "Combination Sum",
            difficulty: "Medium",
            description:
              "Find all unique combinations where the candidate numbers sum to a target. Each number can be used unlimited times.\n\nExample:\nInput: candidates = [2, 3, 6, 7], target = 7\nOutput: [[2, 2, 3], [7]]",
            approach:
              "Use backtracking. At each step, either take the current element (allowing reuse by not advancing the index) or skip to the next element. Stop when target becomes 0 (found) or negative (exceeded).",
            timeComplexity: "O(2^T) where T = target",
            spaceComplexity: "O(T) recursion depth",
            javaCode: `import java.util.*;

public class CombinationSum {
    public static List<List<Integer>> combinationSum(
            int[] candidates, int target) {
        List<List<Integer>> result = new ArrayList<>();
        backtrack(candidates, target, 0, new ArrayList<>(), result);
        return result;
    }

    private static void backtrack(int[] candidates, int target,
            int start, List<Integer> current,
            List<List<Integer>> result) {
        if (target == 0) {
            result.add(new ArrayList<>(current));
            return;
        }
        if (target < 0) return;

        for (int i = start; i < candidates.length; i++) {
            current.add(candidates[i]);
            // Same element can be reused (pass i, not i+1)
            backtrack(candidates, target - candidates[i],
                     i, current, result);
            current.remove(current.size() - 1); // Backtrack
        }
    }

    public static void main(String[] args) {
        int[] candidates = {2, 3, 6, 7};
        System.out.println(combinationSum(candidates, 7));
        // Output: [[2, 2, 3], [7]]
    }
}`,
          },
          {
            id: "permutations",
            title: "Generate All Permutations",
            difficulty: "Medium",
            description:
              "Generate all possible permutations of an array of distinct integers.\n\nExample:\nInput: [1, 2, 3]\nOutput: [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]",
            approach:
              "Use backtracking with a boolean visited array. At each position, try all unvisited elements. Mark as visited, recurse, then unmark (backtrack).",
            timeComplexity: "O(N! × N)",
            spaceComplexity: "O(N)",
            javaCode: `import java.util.*;

public class Permutations {
    public static List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        boolean[] visited = new boolean[nums.length];
        backtrack(nums, visited, new ArrayList<>(), result);
        return result;
    }

    private static void backtrack(int[] nums, boolean[] visited,
            List<Integer> current, List<List<Integer>> result) {
        if (current.size() == nums.length) {
            result.add(new ArrayList<>(current));
            return;
        }

        for (int i = 0; i < nums.length; i++) {
            if (!visited[i]) {
                visited[i] = true;
                current.add(nums[i]);
                backtrack(nums, visited, current, result);
                current.remove(current.size() - 1);
                visited[i] = false;
            }
        }
    }

    public static void main(String[] args) {
        int[] nums = {1, 2, 3};
        System.out.println(permute(nums));
        // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
    }
}`,
          },
        ],
      },
      {
        id: "hard-recursion",
        title: "Hard Backtracking",
        questions: [
          {
            id: "n-queens",
            title: "N-Queens Problem",
            difficulty: "Hard",
            description:
              "Place N queens on an N×N chessboard so that no two queens attack each other. Return all distinct solutions.\n\nExample (N=4): Two solutions exist.",
            approach:
              "Place queens column by column. For each column, try placing a queen in each row. Check if the position is safe (no queen in same row, or diagonals). Use backtracking to explore all possibilities.",
            timeComplexity: "O(N!)",
            spaceComplexity: "O(N²)",
            javaCode: `import java.util.*;

public class NQueens {
    public static List<List<String>> solveNQueens(int n) {
        List<List<String>> result = new ArrayList<>();
        char[][] board = new char[n][n];

        for (char[] row : board) Arrays.fill(row, '.');

        solve(board, 0, n, result);
        return result;
    }

    private static void solve(char[][] board, int col, int n,
                              List<List<String>> result) {
        if (col == n) {
            List<String> solution = new ArrayList<>();
            for (char[] row : board)
                solution.add(new String(row));
            result.add(solution);
            return;
        }

        for (int row = 0; row < n; row++) {
            if (isSafe(board, row, col, n)) {
                board[row][col] = 'Q';
                solve(board, col + 1, n, result);
                board[row][col] = '.'; // Backtrack
            }
        }
    }

    private static boolean isSafe(char[][] board, int row,
                                  int col, int n) {
        // Check row (left)
        for (int j = 0; j < col; j++)
            if (board[row][j] == 'Q') return false;

        // Check upper-left diagonal
        for (int i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--)
            if (board[i][j] == 'Q') return false;

        // Check lower-left diagonal
        for (int i = row + 1, j = col - 1; i < n && j >= 0; i++, j--)
            if (board[i][j] == 'Q') return false;

        return true;
    }

    public static void main(String[] args) {
        List<List<String>> solutions = solveNQueens(4);
        for (List<String> sol : solutions) {
            for (String row : sol) System.out.println(row);
            System.out.println("---");
        }
    }
}`,
          },
          {
            id: "sudoku-solver",
            title: "Sudoku Solver",
            difficulty: "Hard",
            description:
              "Write a program to solve a Sudoku puzzle by filling the empty cells (represented by '.'). Each row, column, and 3×3 box must contain digits 1-9 without repetition.",
            approach:
              "Use backtracking. Find an empty cell, try digits 1-9. For each digit, check if it's valid (not in same row, column, or 3×3 box). If valid, place it and recurse. If recursion fails, backtrack.",
            timeComplexity: "O(9^(N×N)) worst case",
            spaceComplexity: "O(N×N)",
            javaCode: `public class SudokuSolver {
    public static void solveSudoku(char[][] board) {
        solve(board);
    }

    private static boolean solve(char[][] board) {
        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                if (board[i][j] == '.') {
                    for (char c = '1'; c <= '9'; c++) {
                        if (isValid(board, i, j, c)) {
                            board[i][j] = c;

                            if (solve(board)) return true;

                            board[i][j] = '.'; // Backtrack
                        }
                    }
                    return false; // No valid digit found
                }
            }
        }
        return true; // All cells filled
    }

    private static boolean isValid(char[][] board,
            int row, int col, char c) {
        for (int i = 0; i < 9; i++) {
            // Check row
            if (board[row][i] == c) return false;
            // Check column
            if (board[i][col] == c) return false;
            // Check 3x3 box
            int boxRow = 3 * (row / 3) + i / 3;
            int boxCol = 3 * (col / 3) + i % 3;
            if (board[boxRow][boxCol] == c) return false;
        }
        return true;
    }

    public static void main(String[] args) {
        char[][] board = {
            {'5','3','.','.','7','.','.','.','.'},
            {'6','.','.','1','9','5','.','.','.'},
            {'.','9','8','.','.','.','.','6','.'},
            {'8','.','.','.','6','.','.','.','3'},
            {'4','.','.','8','.','3','.','.','1'},
            {'7','.','.','.','2','.','.','.','6'},
            {'.','6','.','.','.','.','2','8','.'},
            {'.','.','.','4','1','9','.','.','5'},
            {'.','.','.','.','8','.','.','7','9'}
        };
        solveSudoku(board);

        for (char[] row : board) {
            System.out.println(java.util.Arrays.toString(row));
        }
    }
}`,
          },
        ],
      },
    ],
  },

  // ─── STEP 8: BIT MANIPULATION ─────────────────────────────
  {
    id: "bit-manipulation",
    step: 8,
    title: "Bit Manipulation",
    icon: "⚡",
    subtopics: [
      {
        id: "bit-problems",
        title: "Bit Manipulation Problems",
        questions: [
          {
            id: "single-number",
            title: "Single Number (XOR)",
            difficulty: "Easy",
            description:
              "Every element appears twice except one. Find the single one.\n\nExample:\nInput: [4, 1, 2, 1, 2]\nOutput: 4",
            approach:
              "XOR all elements. Since a XOR a = 0 and a XOR 0 = a, all duplicates cancel out, leaving the single number.",
            timeComplexity: "O(N)",
            spaceComplexity: "O(1)",
            javaCode: `public class SingleNumber {
    public static int singleNumber(int[] nums) {
        int result = 0;
        for (int num : nums) {
            result ^= num; // XOR
        }
        return result;
    }

    public static void main(String[] args) {
        int[] nums = {4, 1, 2, 1, 2};
        System.out.println(singleNumber(nums)); // 4
    }
}`,
          },
          {
            id: "count-set-bits",
            title: "Count Set Bits (Number of 1s)",
            difficulty: "Easy",
            description:
              "Count the number of 1s (set bits) in the binary representation of a number.\n\nExample:\nInput: 11 (binary: 1011)\nOutput: 3",
            approach:
              "Brian Kernighan's Algorithm: n & (n-1) removes the rightmost set bit. Count how many times you can do this until n becomes 0.",
            timeComplexity: "O(log N) or O(number of set bits)",
            spaceComplexity: "O(1)",
            javaCode: `public class CountSetBits {
    // Brian Kernighan's Algorithm
    public static int countSetBits(int n) {
        int count = 0;
        while (n > 0) {
            n &= (n - 1); // Remove rightmost set bit
            count++;
        }
        return count;
    }

    // Using right shift
    public static int countSetBitsShift(int n) {
        int count = 0;
        while (n > 0) {
            count += n & 1;
            n >>= 1;
        }
        return count;
    }

    public static void main(String[] args) {
        System.out.println(countSetBits(11)); // 3 (1011)
        System.out.println(countSetBits(15)); // 4 (1111)
    }
}`,
          },
          {
            id: "power-of-two",
            title: "Check if Power of Two",
            difficulty: "Easy",
            description:
              "Check if a number is a power of 2.\n\nExample:\nInput: 16 → true (2^4)\nInput: 18 → false",
            approach:
              "A power of 2 has exactly one set bit. So n & (n-1) should be 0. Also check n > 0.",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)",
            javaCode: `public class PowerOfTwo {
    public static boolean isPowerOfTwo(int n) {
        return n > 0 && (n & (n - 1)) == 0;
    }

    public static void main(String[] args) {
        System.out.println(isPowerOfTwo(16)); // true
        System.out.println(isPowerOfTwo(18)); // false
        System.out.println(isPowerOfTwo(1));  // true (2^0)
    }
}`,
          },
        ],
      },
    ],
  },

  // ─── STEP 9: STACK AND QUEUES ──────────────────────────────
  {
    id: "stack-queues",
    step: 9,
    title: "Stack & Queues",
    icon: "📚",
    subtopics: [
      {
        id: "stack-learning",
        title: "Stack Problems",
        questions: [
          {
            id: "valid-parentheses",
            title: "Valid Parentheses",
            difficulty: "Easy",
            description:
              "Check if a string of brackets is valid. Each open bracket must have a matching close bracket in the correct order.\n\nExample:\nInput: \"({[]})\"\nOutput: true",
            approach:
              "Use a stack. Push opening brackets. For closing brackets, check if the top of the stack has the matching opening bracket. If not, return false. At the end, the stack should be empty.",
            timeComplexity: "O(N)",
            spaceComplexity: "O(N)",
            javaCode: `import java.util.Stack;

public class ValidParentheses {
    public static boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();

        for (char c : s.toCharArray()) {
            if (c == '(' || c == '{' || c == '[') {
                stack.push(c);
            } else {
                if (stack.isEmpty()) return false;

                char top = stack.pop();
                if (c == ')' && top != '(') return false;
                if (c == '}' && top != '{') return false;
                if (c == ']' && top != '[') return false;
            }
        }

        return stack.isEmpty();
    }

    public static void main(String[] args) {
        System.out.println(isValid("({[]})")); // true
        System.out.println(isValid("([)]"));   // false
        System.out.println(isValid("{[]}"));   // true
    }
}`,
          },
          {
            id: "next-greater-element",
            title: "Next Greater Element",
            difficulty: "Medium",
            description:
              "For each element, find the next element that is greater than it (to the right). If none, output -1.\n\nExample:\nInput: [4, 5, 2, 10, 8]\nOutput: [5, 10, 10, -1, -1]",
            approach:
              "Use a monotonic stack (decreasing). Traverse from right to left. Pop elements smaller than current (they can't be NGE for anyone). The top of the stack is the NGE. Push the current element.",
            timeComplexity: "O(N)",
            spaceComplexity: "O(N)",
            javaCode: `import java.util.Stack;

public class NextGreaterElement {
    public static int[] nextGreater(int[] arr) {
        int n = arr.length;
        int[] result = new int[n];
        Stack<Integer> stack = new Stack<>();

        // Traverse from right to left
        for (int i = n - 1; i >= 0; i--) {
            // Pop elements smaller than current
            while (!stack.isEmpty() && stack.peek() <= arr[i]) {
                stack.pop();
            }

            result[i] = stack.isEmpty() ? -1 : stack.peek();
            stack.push(arr[i]);
        }

        return result;
    }

    public static void main(String[] args) {
        int[] arr = {4, 5, 2, 10, 8};
        int[] result = nextGreater(arr);
        for (int num : result) System.out.print(num + " ");
        // Output: 5 10 10 -1 -1
    }
}`,
          },
          {
            id: "largest-rectangle-histogram",
            title: "Largest Rectangle in Histogram",
            difficulty: "Hard",
            description:
              "Given an array of bar heights, find the area of the largest rectangle that can be formed in the histogram.\n\nExample:\nInput: [2, 1, 5, 6, 2, 3]\nOutput: 10 (rectangle of height 5, width 2)",
            approach:
              "Use a stack to track indices of bars. When a bar is shorter than the top, pop and calculate area with the popped bar as the shortest. Width is determined by the current index and the new stack top.",
            timeComplexity: "O(N)",
            spaceComplexity: "O(N)",
            javaCode: `import java.util.Stack;

public class LargestRectangleHistogram {
    public static int largestRectangleArea(int[] heights) {
        Stack<Integer> stack = new Stack<>();
        int maxArea = 0;
        int n = heights.length;

        for (int i = 0; i <= n; i++) {
            int currentHeight = (i == n) ? 0 : heights[i];

            while (!stack.isEmpty()
                   && currentHeight < heights[stack.peek()]) {
                int height = heights[stack.pop()];
                int width = stack.isEmpty() ? i : i - stack.peek() - 1;
                maxArea = Math.max(maxArea, height * width);
            }

            stack.push(i);
        }

        return maxArea;
    }

    public static void main(String[] args) {
        int[] heights = {2, 1, 5, 6, 2, 3};
        System.out.println(largestRectangleArea(heights)); // 10
    }
}`,
          },
        ],
      },
    ],
  },

  // ─── STEP 10: SLIDING WINDOW & TWO POINTER ────────────────
  {
    id: "sliding-window",
    step: 10,
    title: "Sliding Window & Two Pointer",
    icon: "🪟",
    subtopics: [
      {
        id: "sliding-window-problems",
        title: "Sliding Window Problems",
        questions: [
          {
            id: "max-sum-subarray-k",
            title: "Maximum Sum Subarray of Size K",
            difficulty: "Easy",
            description:
              "Find the maximum sum of any subarray of size K.\n\nExample:\nInput: arr = [2, 1, 5, 1, 3, 2], k = 3\nOutput: 9 (subarray [5, 1, 3])",
            approach:
              "Use a sliding window of size K. First calculate the sum of the first K elements. Then slide the window: add the next element and remove the first element of the previous window. Track the maximum sum.",
            timeComplexity: "O(N)",
            spaceComplexity: "O(1)",
            javaCode: `public class MaxSumSubarrayK {
    public static int maxSumSubarray(int[] arr, int k) {
        int n = arr.length;
        if (n < k) return -1;

        // Sum of first window
        int windowSum = 0;
        for (int i = 0; i < k; i++) {
            windowSum += arr[i];
        }

        int maxSum = windowSum;

        // Slide the window
        for (int i = k; i < n; i++) {
            windowSum += arr[i] - arr[i - k];
            maxSum = Math.max(maxSum, windowSum);
        }

        return maxSum;
    }

    public static void main(String[] args) {
        int[] arr = {2, 1, 5, 1, 3, 2};
        System.out.println(maxSumSubarray(arr, 3)); // 9
    }
}`,
          },
          {
            id: "longest-substring-no-repeat",
            title: "Longest Substring Without Repeating Characters",
            difficulty: "Medium",
            description:
              "Find the length of the longest substring without repeating characters.\n\nExample:\nInput: \"abcabcbb\"\nOutput: 3 (\"abc\")",
            approach:
              "Use a sliding window with a HashSet. Expand the right pointer and add characters. If a duplicate is found, shrink from the left until the duplicate is removed. Track the maximum window size.",
            timeComplexity: "O(N)",
            spaceComplexity: "O(min(N, alphabet size))",
            javaCode: `import java.util.HashSet;

public class LongestSubstringNoRepeat {
    public static int lengthOfLongestSubstring(String s) {
        HashSet<Character> set = new HashSet<>();
        int left = 0, maxLen = 0;

        for (int right = 0; right < s.length(); right++) {
            while (set.contains(s.charAt(right))) {
                set.remove(s.charAt(left));
                left++;
            }
            set.add(s.charAt(right));
            maxLen = Math.max(maxLen, right - left + 1);
        }

        return maxLen;
    }

    public static void main(String[] args) {
        System.out.println(lengthOfLongestSubstring("abcabcbb")); // 3
        System.out.println(lengthOfLongestSubstring("bbbbb"));    // 1
        System.out.println(lengthOfLongestSubstring("pwwkew"));   // 3
    }
}`,
          },
          {
            id: "minimum-window-substring",
            title: "Minimum Window Substring",
            difficulty: "Hard",
            description:
              "Given strings s and t, find the minimum window in s that contains all characters of t.\n\nExample:\nInput: s = \"ADOBECODEBANC\", t = \"ABC\"\nOutput: \"BANC\"",
            approach:
              "Use a sliding window with two frequency maps. Expand right to include characters. When all characters of t are covered, shrink from left to find the minimum window.",
            timeComplexity: "O(N)",
            spaceComplexity: "O(N)",
            javaCode: `import java.util.HashMap;

public class MinimumWindowSubstring {
    public static String minWindow(String s, String t) {
        if (s.length() < t.length()) return "";

        HashMap<Character, Integer> tMap = new HashMap<>();
        for (char c : t.toCharArray()) {
            tMap.put(c, tMap.getOrDefault(c, 0) + 1);
        }

        int required = tMap.size();
        int formed = 0;
        HashMap<Character, Integer> windowMap = new HashMap<>();

        int left = 0, minLen = Integer.MAX_VALUE;
        int minLeft = 0;

        for (int right = 0; right < s.length(); right++) {
            char c = s.charAt(right);
            windowMap.put(c, windowMap.getOrDefault(c, 0) + 1);

            if (tMap.containsKey(c) &&
                windowMap.get(c).intValue() == tMap.get(c).intValue()) {
                formed++;
            }

            // Try to shrink window
            while (formed == required) {
                if (right - left + 1 < minLen) {
                    minLen = right - left + 1;
                    minLeft = left;
                }

                char leftChar = s.charAt(left);
                windowMap.put(leftChar, windowMap.get(leftChar) - 1);

                if (tMap.containsKey(leftChar) &&
                    windowMap.get(leftChar) < tMap.get(leftChar)) {
                    formed--;
                }

                left++;
            }
        }

        return minLen == Integer.MAX_VALUE ? ""
            : s.substring(minLeft, minLeft + minLen);
    }

    public static void main(String[] args) {
        System.out.println(minWindow("ADOBECODEBANC", "ABC"));
        // Output: "BANC"
    }
}`,
          },
        ],
      },
    ],
  },

  // ─── STEP 11: HEAPS ───────────────────────────────────────
  {
    id: "heaps",
    step: 11,
    title: "Heaps / Priority Queue",
    icon: "🏔️",
    subtopics: [
      {
        id: "heap-problems",
        title: "Heap Problems",
        questions: [
          {
            id: "kth-largest-element",
            title: "Kth Largest Element in Array",
            difficulty: "Medium",
            description:
              "Find the Kth largest element in an unsorted array.\n\nExample:\nInput: [3, 2, 1, 5, 6, 4], k = 2\nOutput: 5",
            approach:
              "Use a Min-Heap of size K. Add elements; when heap size exceeds K, remove the minimum. The top of the heap is the Kth largest.",
            timeComplexity: "O(N log K)",
            spaceComplexity: "O(K)",
            javaCode: `import java.util.PriorityQueue;

public class KthLargestElement {
    public static int findKthLargest(int[] nums, int k) {
        // Min-heap of size k
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();

        for (int num : nums) {
            minHeap.offer(num);
            if (minHeap.size() > k) {
                minHeap.poll(); // Remove smallest
            }
        }

        return minHeap.peek();
    }

    public static void main(String[] args) {
        int[] nums = {3, 2, 1, 5, 6, 4};
        System.out.println(findKthLargest(nums, 2)); // 5
    }
}`,
          },
          {
            id: "top-k-frequent",
            title: "Top K Frequent Elements",
            difficulty: "Medium",
            description:
              "Given an array, find the K most frequent elements.\n\nExample:\nInput: [1, 1, 1, 2, 2, 3], k = 2\nOutput: [1, 2]",
            approach:
              "Build a frequency map. Use a min-heap of size K based on frequency. After processing all elements, the heap contains the K most frequent elements.",
            timeComplexity: "O(N log K)",
            spaceComplexity: "O(N)",
            javaCode: `import java.util.*;

public class TopKFrequent {
    public static int[] topKFrequent(int[] nums, int k) {
        // Step 1: Build frequency map
        Map<Integer, Integer> freqMap = new HashMap<>();
        for (int num : nums) {
            freqMap.put(num, freqMap.getOrDefault(num, 0) + 1);
        }

        // Step 2: Min-heap based on frequency
        PriorityQueue<Integer> minHeap = new PriorityQueue<>(
            (a, b) -> freqMap.get(a) - freqMap.get(b)
        );

        for (int num : freqMap.keySet()) {
            minHeap.offer(num);
            if (minHeap.size() > k) {
                minHeap.poll();
            }
        }

        // Step 3: Extract result
        int[] result = new int[k];
        for (int i = 0; i < k; i++) {
            result[i] = minHeap.poll();
        }

        return result;
    }

    public static void main(String[] args) {
        int[] nums = {1, 1, 1, 2, 2, 3};
        int[] result = topKFrequent(nums, 2);
        System.out.println(Arrays.toString(result)); // [2, 1]
    }
}`,
          },
          {
            id: "merge-k-sorted-lists",
            title: "Merge K Sorted Lists",
            difficulty: "Hard",
            description:
              "Merge K sorted linked lists into one sorted linked list.\n\nExample:\nInput: [[1,4,5], [1,3,4], [2,6]]\nOutput: [1,1,2,3,4,4,5,6]",
            approach:
              "Use a min-heap. Add the head of each list to the heap. Extract the minimum, add it to the result, and push its next node (if exists) to the heap.",
            timeComplexity: "O(N log K) where N = total nodes",
            spaceComplexity: "O(K)",
            javaCode: `import java.util.PriorityQueue;

public class MergeKSortedLists {
    public static ListNode mergeKLists(ListNode[] lists) {
        PriorityQueue<ListNode> minHeap = new PriorityQueue<>(
            (a, b) -> a.val - b.val
        );

        // Add head of each list
        for (ListNode head : lists) {
            if (head != null) minHeap.offer(head);
        }

        ListNode dummy = new ListNode(0);
        ListNode current = dummy;

        while (!minHeap.isEmpty()) {
            ListNode smallest = minHeap.poll();
            current.next = smallest;
            current = current.next;

            if (smallest.next != null) {
                minHeap.offer(smallest.next);
            }
        }

        return dummy.next;
    }

    public static void main(String[] args) {
        ListNode l1 = new ListNode(1);
        l1.next = new ListNode(4);
        l1.next.next = new ListNode(5);

        ListNode l2 = new ListNode(1);
        l2.next = new ListNode(3);
        l2.next.next = new ListNode(4);

        ListNode l3 = new ListNode(2);
        l3.next = new ListNode(6);

        ListNode result = mergeKLists(
            new ListNode[]{l1, l2, l3}
        );

        while (result != null) {
            System.out.print(result.val + " ");
            result = result.next;
        }
        // Output: 1 1 2 3 4 4 5 6
    }
}`,
          },
        ],
      },
    ],
  },

  // ─── STEP 12: GREEDY ──────────────────────────────────────
  {
    id: "greedy",
    step: 12,
    title: "Greedy Algorithms",
    icon: "💰",
    subtopics: [
      {
        id: "greedy-problems",
        title: "Greedy Problems",
        questions: [
          {
            id: "activity-selection",
            title: "Activity Selection / N Meetings in a Room",
            difficulty: "Easy",
            description:
              "Given N activities with start and end times, find the maximum number of activities that can be performed by a single person (non-overlapping).\n\nExample:\nStart: [1, 3, 0, 5, 8, 5]\nEnd:   [2, 4, 6, 7, 9, 9]\nOutput: 4",
            approach:
              "Sort activities by end time. Greedily select the activity with the earliest end time that doesn't conflict with the previously selected one.",
            timeComplexity: "O(N log N)",
            spaceComplexity: "O(N)",
            javaCode: `import java.util.*;

public class ActivitySelection {
    public static int maxActivities(int[] start, int[] end) {
        int n = start.length;
        Integer[] indices = new Integer[n];
        for (int i = 0; i < n; i++) indices[i] = i;

        // Sort by end time
        Arrays.sort(indices, (a, b) -> end[a] - end[b]);

        int count = 1;
        int lastEnd = end[indices[0]];

        for (int i = 1; i < n; i++) {
            if (start[indices[i]] >= lastEnd) {
                count++;
                lastEnd = end[indices[i]];
            }
        }

        return count;
    }

    public static void main(String[] args) {
        int[] start = {1, 3, 0, 5, 8, 5};
        int[] end   = {2, 4, 6, 7, 9, 9};
        System.out.println(maxActivities(start, end)); // 4
    }
}`,
          },
          {
            id: "fractional-knapsack",
            title: "Fractional Knapsack",
            difficulty: "Medium",
            description:
              "Given weights and values of N items, put items in a knapsack of capacity W to get maximum total value. You can take fractions of items.\n\nExample:\nValues: [60, 100, 120], Weights: [10, 20, 30], W = 50\nOutput: 240.0",
            approach:
              "Calculate value/weight ratio for each item. Sort by ratio in descending order. Greedily take items with the highest ratio. If an item doesn't fit completely, take a fraction.",
            timeComplexity: "O(N log N)",
            spaceComplexity: "O(N)",
            javaCode: `import java.util.*;

public class FractionalKnapsack {
    public static double fractionalKnapsack(int W,
            int[] values, int[] weights) {
        int n = values.length;
        double[][] items = new double[n][3]; // value, weight, ratio

        for (int i = 0; i < n; i++) {
            items[i][0] = values[i];
            items[i][1] = weights[i];
            items[i][2] = (double) values[i] / weights[i];
        }

        // Sort by value/weight ratio (descending)
        Arrays.sort(items, (a, b) -> Double.compare(b[2], a[2]));

        double totalValue = 0;
        int remainingCapacity = W;

        for (double[] item : items) {
            if (remainingCapacity >= item[1]) {
                // Take whole item
                totalValue += item[0];
                remainingCapacity -= item[1];
            } else {
                // Take fraction
                totalValue += item[2] * remainingCapacity;
                break;
            }
        }

        return totalValue;
    }

    public static void main(String[] args) {
        int[] values = {60, 100, 120};
        int[] weights = {10, 20, 30};
        int W = 50;
        System.out.println(fractionalKnapsack(W, values, weights));
        // Output: 240.0
    }
}`,
          },
          {
            id: "job-sequencing",
            title: "Job Sequencing Problem",
            difficulty: "Medium",
            description:
              "Given N jobs with deadlines and profits, schedule jobs to maximize profit. Each job takes 1 unit of time and must be done before its deadline.\n\nExample:\nJobs: [{1,4,20}, {2,1,10}, {3,1,40}, {4,1,30}] (id, deadline, profit)\nOutput: 2 jobs, profit = 60",
            approach:
              "Sort jobs by profit (descending). For each job, find the latest available slot before its deadline and assign it.",
            timeComplexity: "O(N² or N log N with DSU)",
            spaceComplexity: "O(N)",
            javaCode: `import java.util.*;

public class JobSequencing {
    public static int[] jobScheduling(int[][] jobs) {
        // Sort by profit descending
        Arrays.sort(jobs, (a, b) -> b[2] - a[2]);

        int maxDeadline = 0;
        for (int[] job : jobs) {
            maxDeadline = Math.max(maxDeadline, job[1]);
        }

        int[] slot = new int[maxDeadline + 1];
        Arrays.fill(slot, -1);

        int countJobs = 0, totalProfit = 0;

        for (int[] job : jobs) {
            // Find the latest available slot
            for (int j = job[1]; j > 0; j--) {
                if (slot[j] == -1) {
                    slot[j] = job[0];
                    countJobs++;
                    totalProfit += job[2];
                    break;
                }
            }
        }

        return new int[]{countJobs, totalProfit};
    }

    public static void main(String[] args) {
        int[][] jobs = {{1,4,20}, {2,1,10}, {3,1,40}, {4,1,30}};
        int[] result = jobScheduling(jobs);
        System.out.println("Jobs: " + result[0]
            + ", Profit: " + result[1]);
        // Output: Jobs: 2, Profit: 60
    }
}`,
          },
        ],
      },
    ],
  },

  // ─── STEP 13: BINARY TREES ────────────────────────────────
  {
    id: "binary-trees",
    step: 13,
    title: "Binary Trees",
    icon: "🌳",
    subtopics: [
      {
        id: "tree-traversals",
        title: "Tree Traversals",
        questions: [
          {
            id: "inorder-traversal",
            title: "Inorder, Preorder, Postorder Traversal",
            difficulty: "Easy",
            description:
              "Perform Inorder (Left, Root, Right), Preorder (Root, Left, Right), and Postorder (Left, Right, Root) traversals of a binary tree.\n\nExample Tree:\n    1\n   / \\\n  2   3\n / \\\n4   5\n\nInorder: [4, 2, 5, 1, 3]\nPreorder: [1, 2, 4, 5, 3]\nPostorder: [4, 5, 2, 3, 1]",
            approach:
              "Use recursion. For inorder: traverse left, visit root, traverse right. For preorder: visit root, traverse left, traverse right. For postorder: traverse left, traverse right, visit root.",
            timeComplexity: "O(N)",
            spaceComplexity: "O(H) where H = height",
            javaCode: `import java.util.*;

class TreeNode {
    int val;
    TreeNode left, right;
    TreeNode(int val) { this.val = val; }
}

public class TreeTraversals {
    // Inorder: Left → Root → Right
    public static void inorder(TreeNode root, List<Integer> result) {
        if (root == null) return;
        inorder(root.left, result);
        result.add(root.val);
        inorder(root.right, result);
    }

    // Preorder: Root → Left → Right
    public static void preorder(TreeNode root, List<Integer> result) {
        if (root == null) return;
        result.add(root.val);
        preorder(root.left, result);
        preorder(root.right, result);
    }

    // Postorder: Left → Right → Root
    public static void postorder(TreeNode root, List<Integer> result) {
        if (root == null) return;
        postorder(root.left, result);
        postorder(root.right, result);
        result.add(root.val);
    }

    // Level Order (BFS)
    public static List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> result = new ArrayList<>();
        if (root == null) return result;

        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);

        while (!queue.isEmpty()) {
            int size = queue.size();
            List<Integer> level = new ArrayList<>();
            for (int i = 0; i < size; i++) {
                TreeNode node = queue.poll();
                level.add(node.val);
                if (node.left != null) queue.offer(node.left);
                if (node.right != null) queue.offer(node.right);
            }
            result.add(level);
        }

        return result;
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        root.left.right = new TreeNode(5);

        List<Integer> inRes = new ArrayList<>();
        inorder(root, inRes);
        System.out.println("Inorder: " + inRes);

        List<Integer> preRes = new ArrayList<>();
        preorder(root, preRes);
        System.out.println("Preorder: " + preRes);

        List<Integer> postRes = new ArrayList<>();
        postorder(root, postRes);
        System.out.println("Postorder: " + postRes);

        System.out.println("Level: " + levelOrder(root));
    }
}`,
          },
        ],
      },
      {
        id: "tree-medium",
        title: "Medium Tree Problems",
        questions: [
          {
            id: "height-binary-tree",
            title: "Height / Max Depth of Binary Tree",
            difficulty: "Easy",
            description:
              "Find the maximum depth (height) of a binary tree.\n\nExample:\n    3\n   / \\\n  9  20\n     / \\\n    15  7\nOutput: 3",
            approach:
              "Recursively find the height of left and right subtrees. The height of the tree is 1 + max(leftHeight, rightHeight). Base case: null node has height 0.",
            timeComplexity: "O(N)",
            spaceComplexity: "O(H)",
            javaCode: `public class HeightOfTree {
    public static int maxDepth(TreeNode root) {
        if (root == null) return 0;

        int leftHeight = maxDepth(root.left);
        int rightHeight = maxDepth(root.right);

        return 1 + Math.max(leftHeight, rightHeight);
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(3);
        root.left = new TreeNode(9);
        root.right = new TreeNode(20);
        root.right.left = new TreeNode(15);
        root.right.right = new TreeNode(7);

        System.out.println(maxDepth(root)); // 3
    }
}`,
          },
          {
            id: "diameter-binary-tree",
            title: "Diameter of Binary Tree",
            difficulty: "Medium",
            description:
              "Find the diameter (longest path between any two nodes) of a binary tree. The path may or may not pass through the root.\n\nExample:\n    1\n   / \\\n  2   3\n / \\\n4   5\nOutput: 3 (path: 4→2→1→3 or 5→2→1→3)",
            approach:
              "At each node, the diameter passing through it is leftHeight + rightHeight. Track the maximum diameter seen. Use a modified height function.",
            timeComplexity: "O(N)",
            spaceComplexity: "O(H)",
            javaCode: `public class DiameterOfTree {
    static int diameter = 0;

    public static int diameterOfBinaryTree(TreeNode root) {
        diameter = 0;
        height(root);
        return diameter;
    }

    private static int height(TreeNode node) {
        if (node == null) return 0;

        int leftHeight = height(node.left);
        int rightHeight = height(node.right);

        // Update diameter
        diameter = Math.max(diameter, leftHeight + rightHeight);

        return 1 + Math.max(leftHeight, rightHeight);
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        root.left.right = new TreeNode(5);

        System.out.println(diameterOfBinaryTree(root)); // 3
    }
}`,
          },
          {
            id: "balanced-binary-tree",
            title: "Check if Binary Tree is Balanced",
            difficulty: "Medium",
            description:
              "A balanced binary tree is one where the height difference of left and right subtrees of every node is at most 1.\n\nExample:\n    3\n   / \\\n  9  20\n     / \\\n    15  7  → Balanced (true)",
            approach:
              "Use a modified height function. If at any node, |leftHeight - rightHeight| > 1, return -1 (not balanced). Otherwise, return the actual height.",
            timeComplexity: "O(N)",
            spaceComplexity: "O(H)",
            javaCode: `public class BalancedBinaryTree {
    public static boolean isBalanced(TreeNode root) {
        return checkHeight(root) != -1;
    }

    private static int checkHeight(TreeNode node) {
        if (node == null) return 0;

        int leftHeight = checkHeight(node.left);
        if (leftHeight == -1) return -1;

        int rightHeight = checkHeight(node.right);
        if (rightHeight == -1) return -1;

        if (Math.abs(leftHeight - rightHeight) > 1) return -1;

        return 1 + Math.max(leftHeight, rightHeight);
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(3);
        root.left = new TreeNode(9);
        root.right = new TreeNode(20);
        root.right.left = new TreeNode(15);
        root.right.right = new TreeNode(7);

        System.out.println(isBalanced(root)); // true
    }
}`,
          },
          {
            id: "lowest-common-ancestor",
            title: "Lowest Common Ancestor (LCA)",
            difficulty: "Medium",
            description:
              "Find the lowest common ancestor of two nodes p and q in a binary tree.\n\nExample:\n       3\n      / \\\n     5   1\n    / \\ / \\\n   6  2 0  8\nLCA(5, 1) = 3\nLCA(5, 4) = 5",
            approach:
              "Recursive: If root is null or matches p/q, return root. Search in left and right subtrees. If both return non-null, root is the LCA. Otherwise, return the non-null result.",
            timeComplexity: "O(N)",
            spaceComplexity: "O(H)",
            javaCode: `public class LowestCommonAncestor {
    public static TreeNode lowestCommonAncestor(
            TreeNode root, TreeNode p, TreeNode q) {
        if (root == null || root == p || root == q) {
            return root;
        }

        TreeNode left = lowestCommonAncestor(root.left, p, q);
        TreeNode right = lowestCommonAncestor(root.right, p, q);

        if (left != null && right != null) {
            return root; // root is the LCA
        }

        return left != null ? left : right;
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(3);
        TreeNode node5 = new TreeNode(5);
        TreeNode node1 = new TreeNode(1);
        root.left = node5;
        root.right = node1;
        node5.left = new TreeNode(6);
        node5.right = new TreeNode(2);
        node1.left = new TreeNode(0);
        node1.right = new TreeNode(8);

        TreeNode lca = lowestCommonAncestor(root, node5, node1);
        System.out.println("LCA: " + lca.val); // 3
    }
}`,
          },
        ],
      },
    ],
  },

  // ─── STEP 14: BINARY SEARCH TREES ─────────────────────────
  {
    id: "bst",
    step: 14,
    title: "Binary Search Trees",
    icon: "🌲",
    subtopics: [
      {
        id: "bst-problems",
        title: "BST Problems",
        questions: [
          {
            id: "search-in-bst",
            title: "Search in a BST",
            difficulty: "Easy",
            description:
              "Search for a value in a Binary Search Tree.\n\nBST Property: Left subtree values < root < Right subtree values.\n\nExample:\n     4\n    / \\\n   2   7\n  / \\\n 1   3\nSearch 2 → Found",
            approach:
              "If value equals root, found. If value < root, search left subtree. If value > root, search right subtree.",
            timeComplexity: "O(H) where H = height",
            spaceComplexity: "O(H)",
            javaCode: `public class SearchBST {
    public static TreeNode searchBST(TreeNode root, int val) {
        if (root == null || root.val == val) return root;

        if (val < root.val) {
            return searchBST(root.left, val);
        } else {
            return searchBST(root.right, val);
        }
    }

    // Iterative version
    public static TreeNode searchBSTIterative(TreeNode root, int val) {
        while (root != null && root.val != val) {
            root = val < root.val ? root.left : root.right;
        }
        return root;
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(4);
        root.left = new TreeNode(2);
        root.right = new TreeNode(7);
        root.left.left = new TreeNode(1);
        root.left.right = new TreeNode(3);

        TreeNode result = searchBST(root, 2);
        System.out.println(result != null ? "Found: " + result.val
                                          : "Not found");
    }
}`,
          },
          {
            id: "validate-bst",
            title: "Validate Binary Search Tree",
            difficulty: "Medium",
            description:
              "Check whether a given binary tree is a valid BST.\n\nA valid BST has: left subtree values < node < right subtree values (for every node).",
            approach:
              "Pass a valid range [min, max] for each node. Root can be any value. Left child must be in [min, root.val). Right child must be in (root.val, max].",
            timeComplexity: "O(N)",
            spaceComplexity: "O(H)",
            javaCode: `public class ValidateBST {
    public static boolean isValidBST(TreeNode root) {
        return validate(root, Long.MIN_VALUE, Long.MAX_VALUE);
    }

    private static boolean validate(TreeNode node,
                                    long min, long max) {
        if (node == null) return true;

        if (node.val <= min || node.val >= max) return false;

        return validate(node.left, min, node.val)
            && validate(node.right, node.val, max);
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(2);
        root.left = new TreeNode(1);
        root.right = new TreeNode(3);
        System.out.println(isValidBST(root)); // true

        TreeNode invalid = new TreeNode(5);
        invalid.left = new TreeNode(1);
        invalid.right = new TreeNode(4);
        invalid.right.left = new TreeNode(3);
        invalid.right.right = new TreeNode(6);
        System.out.println(isValidBST(invalid)); // false
    }
}`,
          },
          {
            id: "kth-smallest-bst",
            title: "Kth Smallest Element in BST",
            difficulty: "Medium",
            description:
              "Find the Kth smallest element in a BST.\n\nExample:\n     3\n    / \\\n   1   4\n    \\\n     2\nK=1 → Output: 1",
            approach:
              "Inorder traversal of BST gives sorted order. Perform inorder traversal and track the count. When count equals K, that's the answer.",
            timeComplexity: "O(H + K)",
            spaceComplexity: "O(H)",
            javaCode: `public class KthSmallestBST {
    static int count, result;

    public static int kthSmallest(TreeNode root, int k) {
        count = 0;
        result = 0;
        inorder(root, k);
        return result;
    }

    private static void inorder(TreeNode node, int k) {
        if (node == null) return;

        inorder(node.left, k);

        count++;
        if (count == k) {
            result = node.val;
            return;
        }

        inorder(node.right, k);
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(3);
        root.left = new TreeNode(1);
        root.right = new TreeNode(4);
        root.left.right = new TreeNode(2);

        System.out.println(kthSmallest(root, 1)); // 1
        System.out.println(kthSmallest(root, 3)); // 3
    }
}`,
          },
        ],
      },
    ],
  },

  // ─── STEP 15: GRAPHS ──────────────────────────────────────
  {
    id: "graphs",
    step: 15,
    title: "Graphs",
    icon: "🕸️",
    subtopics: [
      {
        id: "graph-traversals",
        title: "Graph Traversals",
        questions: [
          {
            id: "bfs-graph",
            title: "BFS of Graph",
            difficulty: "Medium",
            description:
              "Perform Breadth-First Search traversal of a graph starting from node 0.\n\nBFS explores all neighbors at the current depth before moving to the next level.",
            approach:
              "Use a queue. Start by adding the source node. While the queue is not empty, dequeue a node, process it, and enqueue all its unvisited neighbors. Mark nodes as visited to avoid cycles.",
            timeComplexity: "O(V + E)",
            spaceComplexity: "O(V)",
            javaCode: `import java.util.*;

public class BFSGraph {
    public static List<Integer> bfs(int V,
            List<List<Integer>> adj) {
        List<Integer> result = new ArrayList<>();
        boolean[] visited = new boolean[V];

        Queue<Integer> queue = new LinkedList<>();
        queue.offer(0);
        visited[0] = true;

        while (!queue.isEmpty()) {
            int node = queue.poll();
            result.add(node);

            for (int neighbor : adj.get(node)) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.offer(neighbor);
                }
            }
        }

        return result;
    }

    public static void main(String[] args) {
        int V = 5;
        List<List<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < V; i++) adj.add(new ArrayList<>());

        // Undirected edges
        adj.get(0).addAll(Arrays.asList(1, 2));
        adj.get(1).addAll(Arrays.asList(0, 3));
        adj.get(2).addAll(Arrays.asList(0, 4));
        adj.get(3).addAll(Arrays.asList(1));
        adj.get(4).addAll(Arrays.asList(2));

        System.out.println(bfs(V, adj)); // [0, 1, 2, 3, 4]
    }
}`,
          },
          {
            id: "dfs-graph",
            title: "DFS of Graph",
            difficulty: "Medium",
            description:
              "Perform Depth-First Search traversal of a graph starting from node 0.\n\nDFS goes as deep as possible before backtracking.",
            approach:
              "Use recursion (or a stack). From the current node, visit it and recursively visit all unvisited neighbors. Mark nodes as visited.",
            timeComplexity: "O(V + E)",
            spaceComplexity: "O(V)",
            javaCode: `import java.util.*;

public class DFSGraph {
    public static List<Integer> dfs(int V,
            List<List<Integer>> adj) {
        List<Integer> result = new ArrayList<>();
        boolean[] visited = new boolean[V];
        dfsHelper(0, adj, visited, result);
        return result;
    }

    private static void dfsHelper(int node,
            List<List<Integer>> adj, boolean[] visited,
            List<Integer> result) {
        visited[node] = true;
        result.add(node);

        for (int neighbor : adj.get(node)) {
            if (!visited[neighbor]) {
                dfsHelper(neighbor, adj, visited, result);
            }
        }
    }

    public static void main(String[] args) {
        int V = 5;
        List<List<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < V; i++) adj.add(new ArrayList<>());

        adj.get(0).addAll(Arrays.asList(1, 2));
        adj.get(1).addAll(Arrays.asList(0, 3));
        adj.get(2).addAll(Arrays.asList(0, 4));
        adj.get(3).addAll(Arrays.asList(1));
        adj.get(4).addAll(Arrays.asList(2));

        System.out.println(dfs(V, adj)); // [0, 1, 3, 2, 4]
    }
}`,
          },
          {
            id: "detect-cycle-undirected",
            title: "Detect Cycle in Undirected Graph",
            difficulty: "Medium",
            description:
              "Detect if an undirected graph contains a cycle.",
            approach:
              "Use BFS or DFS. During traversal, if we encounter a visited node that is not the parent of the current node, a cycle exists.",
            timeComplexity: "O(V + E)",
            spaceComplexity: "O(V)",
            javaCode: `import java.util.*;

public class CycleUndirected {
    public static boolean hasCycle(int V,
            List<List<Integer>> adj) {
        boolean[] visited = new boolean[V];

        for (int i = 0; i < V; i++) {
            if (!visited[i]) {
                if (dfs(i, -1, adj, visited)) return true;
            }
        }
        return false;
    }

    private static boolean dfs(int node, int parent,
            List<List<Integer>> adj, boolean[] visited) {
        visited[node] = true;

        for (int neighbor : adj.get(node)) {
            if (!visited[neighbor]) {
                if (dfs(neighbor, node, adj, visited))
                    return true;
            } else if (neighbor != parent) {
                return true; // Cycle detected!
            }
        }

        return false;
    }

    public static void main(String[] args) {
        int V = 4;
        List<List<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < V; i++) adj.add(new ArrayList<>());

        adj.get(0).add(1); adj.get(1).add(0);
        adj.get(1).add(2); adj.get(2).add(1);
        adj.get(2).add(3); adj.get(3).add(2);
        adj.get(3).add(0); adj.get(0).add(3); // Creates cycle

        System.out.println(hasCycle(V, adj)); // true
    }
}`,
          },
        ],
      },
      {
        id: "graph-shortest-path",
        title: "Shortest Path Algorithms",
        questions: [
          {
            id: "dijkstra-algorithm",
            title: "Dijkstra's Algorithm",
            difficulty: "Medium",
            description:
              "Find the shortest path from a source to all vertices in a weighted graph (non-negative weights).\n\nExample: Source = 0, find shortest distances to all nodes.",
            approach:
              "Use a min-heap (Priority Queue). Start with distance 0 for source. For each node, update distances of neighbors if a shorter path is found through the current node.",
            timeComplexity: "O((V + E) log V)",
            spaceComplexity: "O(V + E)",
            javaCode: `import java.util.*;

public class DijkstraAlgorithm {
    public static int[] dijkstra(int V,
            List<List<int[]>> adj, int source) {
        int[] dist = new int[V];
        Arrays.fill(dist, Integer.MAX_VALUE);
        dist[source] = 0;

        // Min-heap: {distance, node}
        PriorityQueue<int[]> pq = new PriorityQueue<>(
            (a, b) -> a[0] - b[0]
        );
        pq.offer(new int[]{0, source});

        while (!pq.isEmpty()) {
            int[] curr = pq.poll();
            int d = curr[0], u = curr[1];

            if (d > dist[u]) continue; // Skip outdated

            for (int[] edge : adj.get(u)) {
                int v = edge[0], weight = edge[1];

                if (dist[u] + weight < dist[v]) {
                    dist[v] = dist[u] + weight;
                    pq.offer(new int[]{dist[v], v});
                }
            }
        }

        return dist;
    }

    public static void main(String[] args) {
        int V = 5;
        List<List<int[]>> adj = new ArrayList<>();
        for (int i = 0; i < V; i++) adj.add(new ArrayList<>());

        // Edges: {to, weight}
        adj.get(0).add(new int[]{1, 2});
        adj.get(0).add(new int[]{2, 4});
        adj.get(1).add(new int[]{2, 1});
        adj.get(1).add(new int[]{3, 7});
        adj.get(2).add(new int[]{4, 3});
        adj.get(3).add(new int[]{4, 1});

        int[] distances = dijkstra(V, adj, 0);
        System.out.println(Arrays.toString(distances));
        // [0, 2, 3, 9, 6]
    }
}`,
          },
          {
            id: "topological-sort",
            title: "Topological Sort (Kahn's BFS)",
            difficulty: "Medium",
            description:
              "Find a topological ordering of a Directed Acyclic Graph (DAG). In topological order, for every edge u→v, u comes before v.\n\nExample: 5→0, 5→2, 4→0, 4→1, 2→3, 3→1\nOutput: [4, 5, 2, 0, 3, 1] or [5, 4, 2, 3, 0, 1]",
            approach:
              "Kahn's Algorithm (BFS): Calculate in-degree of all nodes. Add nodes with in-degree 0 to queue. Process each node, reduce in-degree of neighbors. Add new zero-in-degree nodes to queue.",
            timeComplexity: "O(V + E)",
            spaceComplexity: "O(V)",
            javaCode: `import java.util.*;

public class TopologicalSort {
    public static List<Integer> topologicalSort(int V,
            List<List<Integer>> adj) {
        int[] inDegree = new int[V];

        // Calculate in-degree
        for (int i = 0; i < V; i++) {
            for (int neighbor : adj.get(i)) {
                inDegree[neighbor]++;
            }
        }

        // Add nodes with in-degree 0
        Queue<Integer> queue = new LinkedList<>();
        for (int i = 0; i < V; i++) {
            if (inDegree[i] == 0) queue.offer(i);
        }

        List<Integer> result = new ArrayList<>();

        while (!queue.isEmpty()) {
            int node = queue.poll();
            result.add(node);

            for (int neighbor : adj.get(node)) {
                inDegree[neighbor]--;
                if (inDegree[neighbor] == 0) {
                    queue.offer(neighbor);
                }
            }
        }

        return result;
    }

    public static void main(String[] args) {
        int V = 6;
        List<List<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < V; i++) adj.add(new ArrayList<>());

        adj.get(5).add(0); adj.get(5).add(2);
        adj.get(4).add(0); adj.get(4).add(1);
        adj.get(2).add(3); adj.get(3).add(1);

        System.out.println(topologicalSort(V, adj));
        // [4, 5, 0, 2, 3, 1] or similar valid ordering
    }
}`,
          },
        ],
      },
    ],
  },

  // ─── STEP 16: DYNAMIC PROGRAMMING ─────────────────────────
  {
    id: "dp",
    step: 16,
    title: "Dynamic Programming",
    icon: "🧩",
    subtopics: [
      {
        id: "dp-1d",
        title: "1D DP",
        questions: [
          {
            id: "climbing-stairs",
            title: "Climbing Stairs",
            difficulty: "Easy",
            description:
              "You can climb 1 or 2 stairs at a time. Find the number of distinct ways to reach the top (N stairs).\n\nExample:\nInput: N = 4\nOutput: 5 (1111, 112, 121, 211, 22)",
            approach:
              "This is equivalent to Fibonacci. dp[i] = dp[i-1] + dp[i-2]. Base cases: dp[0] = 1, dp[1] = 1.",
            timeComplexity: "O(N)",
            spaceComplexity: "O(1) with optimization",
            javaCode: `public class ClimbingStairs {
    // Space Optimized
    public static int climbStairs(int n) {
        if (n <= 2) return n;

        int prev2 = 1, prev1 = 2;

        for (int i = 3; i <= n; i++) {
            int curr = prev1 + prev2;
            prev2 = prev1;
            prev1 = curr;
        }

        return prev1;
    }

    // Tabulation approach
    public static int climbStairsDP(int n) {
        if (n <= 2) return n;

        int[] dp = new int[n + 1];
        dp[1] = 1;
        dp[2] = 2;

        for (int i = 3; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }

        return dp[n];
    }

    public static void main(String[] args) {
        System.out.println(climbStairs(4));  // 5
        System.out.println(climbStairs(5));  // 8
    }
}`,
          },
          {
            id: "house-robber",
            title: "House Robber",
            difficulty: "Medium",
            description:
              "Given an array of non-negative integers representing money at each house, find the maximum money you can rob without robbing two adjacent houses.\n\nExample:\nInput: [2, 7, 9, 3, 1]\nOutput: 12 (rob houses 0, 2, 4: 2+9+1=12)",
            approach:
              "DP: dp[i] = max(dp[i-1], dp[i-2] + nums[i]). Either skip the current house or rob it (add to dp[i-2]).",
            timeComplexity: "O(N)",
            spaceComplexity: "O(1)",
            javaCode: `public class HouseRobber {
    public static int rob(int[] nums) {
        if (nums.length == 1) return nums[0];

        int prev2 = 0, prev1 = 0;

        for (int num : nums) {
            int curr = Math.max(prev1, prev2 + num);
            prev2 = prev1;
            prev1 = curr;
        }

        return prev1;
    }

    public static void main(String[] args) {
        System.out.println(rob(new int[]{2, 7, 9, 3, 1})); // 12
        System.out.println(rob(new int[]{1, 2, 3, 1}));     // 4
    }
}`,
          },
        ],
      },
      {
        id: "dp-2d",
        title: "2D/3D DP & Grids",
        questions: [
          {
            id: "unique-paths",
            title: "Unique Paths in a Grid",
            difficulty: "Medium",
            description:
              "A robot is at the top-left of an m×n grid. It can only move right or down. Count the number of unique paths to reach bottom-right.\n\nExample:\nInput: m=3, n=7\nOutput: 28",
            approach:
              "DP: dp[i][j] = dp[i-1][j] + dp[i][j-1]. First row and first column have only 1 path each.",
            timeComplexity: "O(M × N)",
            spaceComplexity: "O(N) with space optimization",
            javaCode: `public class UniquePaths {
    public static int uniquePaths(int m, int n) {
        int[] dp = new int[n];
        java.util.Arrays.fill(dp, 1);

        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                dp[j] = dp[j] + dp[j - 1];
            }
        }

        return dp[n - 1];
    }

    // 2D tabulation
    public static int uniquePaths2D(int m, int n) {
        int[][] dp = new int[m][n];

        for (int i = 0; i < m; i++) dp[i][0] = 1;
        for (int j = 0; j < n; j++) dp[0][j] = 1;

        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }

        return dp[m - 1][n - 1];
    }

    public static void main(String[] args) {
        System.out.println(uniquePaths(3, 7)); // 28
        System.out.println(uniquePaths(3, 3)); // 6
    }
}`,
          },
          {
            id: "minimum-path-sum",
            title: "Minimum Path Sum in Grid",
            difficulty: "Medium",
            description:
              "Given an m×n grid with non-negative numbers, find a path from top-left to bottom-right that minimizes the sum. Can only move right or down.\n\nExample:\nInput: [[1,3,1],[1,5,1],[4,2,1]]\nOutput: 7 (path: 1→3→1→1→1)",
            approach:
              "DP: dp[i][j] = grid[i][j] + min(dp[i-1][j], dp[i][j-1]). Handle first row and column separately.",
            timeComplexity: "O(M × N)",
            spaceComplexity: "O(N)",
            javaCode: `public class MinimumPathSum {
    public static int minPathSum(int[][] grid) {
        int m = grid.length, n = grid[0].length;
        int[][] dp = new int[m][n];

        dp[0][0] = grid[0][0];

        // First column
        for (int i = 1; i < m; i++) {
            dp[i][0] = dp[i - 1][0] + grid[i][0];
        }

        // First row
        for (int j = 1; j < n; j++) {
            dp[0][j] = dp[0][j - 1] + grid[0][j];
        }

        // Fill the rest
        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                dp[i][j] = grid[i][j]
                    + Math.min(dp[i - 1][j], dp[i][j - 1]);
            }
        }

        return dp[m - 1][n - 1];
    }

    public static void main(String[] args) {
        int[][] grid = {{1,3,1}, {1,5,1}, {4,2,1}};
        System.out.println(minPathSum(grid)); // 7
    }
}`,
          },
        ],
      },
      {
        id: "dp-subsequences",
        title: "DP on Subsequences",
        questions: [
          {
            id: "01-knapsack",
            title: "0/1 Knapsack Problem",
            difficulty: "Medium",
            description:
              "Given N items with weights and values, find the maximum value that can be put in a knapsack of capacity W. Each item can be taken at most once.\n\nExample:\nValues: [60, 100, 120], Weights: [10, 20, 30], W: 50\nOutput: 220 (items 2 and 3)",
            approach:
              "DP: dp[i][w] = max value using first i items with capacity w. Either take item i (if weight allows) or skip it. dp[i][w] = max(dp[i-1][w], val[i-1] + dp[i-1][w-wt[i-1]]).",
            timeComplexity: "O(N × W)",
            spaceComplexity: "O(W) with optimization",
            javaCode: `public class Knapsack01 {
    // Space Optimized 1D DP
    public static int knapsack(int[] values, int[] weights, int W) {
        int n = values.length;
        int[] dp = new int[W + 1];

        for (int i = 0; i < n; i++) {
            // Traverse from right to left (important!)
            for (int w = W; w >= weights[i]; w--) {
                dp[w] = Math.max(dp[w],
                    values[i] + dp[w - weights[i]]);
            }
        }

        return dp[W];
    }

    // 2D DP version
    public static int knapsack2D(int[] values, int[] weights, int W) {
        int n = values.length;
        int[][] dp = new int[n + 1][W + 1];

        for (int i = 1; i <= n; i++) {
            for (int w = 1; w <= W; w++) {
                dp[i][w] = dp[i - 1][w]; // Don't take item i

                if (weights[i - 1] <= w) {
                    dp[i][w] = Math.max(dp[i][w],
                        values[i - 1] + dp[i - 1][w - weights[i - 1]]);
                }
            }
        }

        return dp[n][W];
    }

    public static void main(String[] args) {
        int[] values = {60, 100, 120};
        int[] weights = {10, 20, 30};
        int W = 50;

        System.out.println(knapsack(values, weights, W)); // 220
    }
}`,
          },
          {
            id: "coin-change",
            title: "Coin Change (Minimum Coins)",
            difficulty: "Medium",
            description:
              "Given coin denominations and an amount, find the minimum number of coins needed to make the amount. Return -1 if not possible.\n\nExample:\nInput: coins = [1, 2, 5], amount = 11\nOutput: 3 (5 + 5 + 1)",
            approach:
              "DP: dp[i] = minimum coins to make amount i. For each amount, try all coins. dp[i] = min(dp[i], 1 + dp[i - coin]) for each coin.",
            timeComplexity: "O(amount × number of coins)",
            spaceComplexity: "O(amount)",
            javaCode: `import java.util.Arrays;

public class CoinChange {
    public static int coinChange(int[] coins, int amount) {
        int[] dp = new int[amount + 1];
        Arrays.fill(dp, amount + 1); // Initialize with max
        dp[0] = 0;

        for (int i = 1; i <= amount; i++) {
            for (int coin : coins) {
                if (coin <= i) {
                    dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
                }
            }
        }

        return dp[amount] > amount ? -1 : dp[amount];
    }

    public static void main(String[] args) {
        int[] coins = {1, 2, 5};
        System.out.println(coinChange(coins, 11)); // 3 (5+5+1)
        System.out.println(coinChange(coins, 3));  // 2 (2+1)

        int[] coins2 = {2};
        System.out.println(coinChange(coins2, 3)); // -1
    }
}`,
          },
          {
            id: "longest-increasing-subsequence",
            title: "Longest Increasing Subsequence",
            difficulty: "Medium",
            description:
              "Find the length of the longest strictly increasing subsequence.\n\nExample:\nInput: [10, 9, 2, 5, 3, 7, 101, 18]\nOutput: 4 ([2, 3, 7, 101] or [2, 5, 7, 101])",
            approach:
              "Binary Search approach: Maintain a tails array. For each element, use binary search to find its position. If it extends the LIS, append it. Otherwise, replace the appropriate element.",
            timeComplexity: "O(N log N)",
            spaceComplexity: "O(N)",
            javaCode: `import java.util.*;

public class LongestIncreasingSubsequence {
    // O(N log N) - Binary Search approach
    public static int lengthOfLIS(int[] nums) {
        List<Integer> tails = new ArrayList<>();

        for (int num : nums) {
            int pos = Collections.binarySearch(tails, num);
            if (pos < 0) pos = -(pos + 1);

            if (pos == tails.size()) {
                tails.add(num);
            } else {
                tails.set(pos, num);
            }
        }

        return tails.size();
    }

    // O(N²) DP approach
    public static int lengthOfLIS_DP(int[] nums) {
        int n = nums.length;
        int[] dp = new int[n];
        Arrays.fill(dp, 1);
        int maxLen = 1;

        for (int i = 1; i < n; i++) {
            for (int j = 0; j < i; j++) {
                if (nums[j] < nums[i]) {
                    dp[i] = Math.max(dp[i], dp[j] + 1);
                }
            }
            maxLen = Math.max(maxLen, dp[i]);
        }

        return maxLen;
    }

    public static void main(String[] args) {
        int[] nums = {10, 9, 2, 5, 3, 7, 101, 18};
        System.out.println(lengthOfLIS(nums)); // 4
    }
}`,
          },
        ],
      },
      {
        id: "dp-strings",
        title: "DP on Strings",
        questions: [
          {
            id: "longest-common-subsequence",
            title: "Longest Common Subsequence",
            difficulty: "Medium",
            description:
              "Find the length of the longest common subsequence of two strings.\n\nExample:\nInput: text1 = \"abcde\", text2 = \"ace\"\nOutput: 3 (LCS = \"ace\")",
            approach:
              "DP: dp[i][j] = LCS length of text1[0..i-1] and text2[0..j-1]. If characters match, dp[i][j] = 1 + dp[i-1][j-1]. Otherwise, dp[i][j] = max(dp[i-1][j], dp[i][j-1]).",
            timeComplexity: "O(M × N)",
            spaceComplexity: "O(M × N)",
            javaCode: `public class LongestCommonSubsequence {
    public static int longestCommonSubsequence(String s1, String s2) {
        int m = s1.length(), n = s2.length();
        int[][] dp = new int[m + 1][n + 1];

        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (s1.charAt(i - 1) == s2.charAt(j - 1)) {
                    dp[i][j] = 1 + dp[i - 1][j - 1];
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }

        return dp[m][n];
    }

    // Also print the LCS string
    public static String printLCS(String s1, String s2) {
        int m = s1.length(), n = s2.length();
        int[][] dp = new int[m + 1][n + 1];

        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (s1.charAt(i - 1) == s2.charAt(j - 1))
                    dp[i][j] = 1 + dp[i - 1][j - 1];
                else
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }

        // Backtrack to find LCS string
        StringBuilder lcs = new StringBuilder();
        int i = m, j = n;
        while (i > 0 && j > 0) {
            if (s1.charAt(i - 1) == s2.charAt(j - 1)) {
                lcs.append(s1.charAt(i - 1));
                i--; j--;
            } else if (dp[i - 1][j] > dp[i][j - 1]) {
                i--;
            } else {
                j--;
            }
        }

        return lcs.reverse().toString();
    }

    public static void main(String[] args) {
        System.out.println(longestCommonSubsequence("abcde", "ace"));
        // Output: 3
        System.out.println(printLCS("abcde", "ace"));
        // Output: "ace"
    }
}`,
          },
          {
            id: "edit-distance",
            title: "Edit Distance (Levenshtein)",
            difficulty: "Hard",
            description:
              "Find the minimum number of operations (insert, delete, replace) to convert word1 to word2.\n\nExample:\nInput: word1 = \"horse\", word2 = \"ros\"\nOutput: 3 (horse → rorse → rose → ros)",
            approach:
              "DP: dp[i][j] = min operations to convert word1[0..i-1] to word2[0..j-1]. If chars match, dp[i][j] = dp[i-1][j-1]. Otherwise, 1 + min(insert, delete, replace).",
            timeComplexity: "O(M × N)",
            spaceComplexity: "O(M × N)",
            javaCode: `public class EditDistance {
    public static int minDistance(String word1, String word2) {
        int m = word1.length(), n = word2.length();
        int[][] dp = new int[m + 1][n + 1];

        // Base cases
        for (int i = 0; i <= m; i++) dp[i][0] = i; // Delete all
        for (int j = 0; j <= n; j++) dp[0][j] = j; // Insert all

        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (word1.charAt(i - 1) == word2.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1]; // No operation
                } else {
                    dp[i][j] = 1 + Math.min(
                        dp[i - 1][j - 1],  // Replace
                        Math.min(
                            dp[i - 1][j],   // Delete
                            dp[i][j - 1]    // Insert
                        )
                    );
                }
            }
        }

        return dp[m][n];
    }

    public static void main(String[] args) {
        System.out.println(minDistance("horse", "ros"));       // 3
        System.out.println(minDistance("intention", "execution")); // 5
    }
}`,
          },
        ],
      },
    ],
  },

  // ─── STEP 17: TRIES ───────────────────────────────────────
  {
    id: "tries",
    step: 17,
    title: "Tries",
    icon: "🔤",
    subtopics: [
      {
        id: "trie-problems",
        title: "Trie Implementation & Problems",
        questions: [
          {
            id: "implement-trie",
            title: "Implement Trie (Prefix Tree)",
            difficulty: "Medium",
            description:
              "Implement a Trie with insert, search, and startsWith operations.\n\nExample:\ninsert(\"apple\") → search(\"apple\") = true\nsearch(\"app\") = false\nstartsWith(\"app\") = true",
            approach:
              "Each TrieNode has an array of 26 children (for 'a'-'z') and a boolean isEnd. Insert: create nodes for each character. Search: follow nodes, check isEnd. StartsWith: follow nodes, just check existence.",
            timeComplexity: "O(L) per operation, L = word length",
            spaceComplexity: "O(N × L) for N words",
            javaCode: `public class Trie {
    private TrieNode root;

    class TrieNode {
        TrieNode[] children;
        boolean isEnd;

        TrieNode() {
            children = new TrieNode[26];
            isEnd = false;
        }
    }

    public Trie() {
        root = new TrieNode();
    }

    public void insert(String word) {
        TrieNode node = root;
        for (char c : word.toCharArray()) {
            int index = c - 'a';
            if (node.children[index] == null) {
                node.children[index] = new TrieNode();
            }
            node = node.children[index];
        }
        node.isEnd = true;
    }

    public boolean search(String word) {
        TrieNode node = findNode(word);
        return node != null && node.isEnd;
    }

    public boolean startsWith(String prefix) {
        return findNode(prefix) != null;
    }

    private TrieNode findNode(String s) {
        TrieNode node = root;
        for (char c : s.toCharArray()) {
            int index = c - 'a';
            if (node.children[index] == null) return null;
            node = node.children[index];
        }
        return node;
    }

    public static void main(String[] args) {
        Trie trie = new Trie();
        trie.insert("apple");

        System.out.println(trie.search("apple"));    // true
        System.out.println(trie.search("app"));      // false
        System.out.println(trie.startsWith("app"));  // true

        trie.insert("app");
        System.out.println(trie.search("app"));      // true
    }
}`,
          },
        ],
      },
    ],
  },
];
