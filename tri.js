import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int size = 0;
        Character c;
        System.out.println("Enter the height of the triangle : ");
        //input for height
        size = sc.nextInt();
        System.out.println("Which character woudl you want to see used : ");
        c = sc.next().charAt(0);
        // int for the for loops
        int i, j, k;
        for (i = 0; i < size + 1; i++) { for (j = size; j > i; j--) {
                System.out.print(" ");
            }
            for (k = 0; k < (2 * i - 1); k++) {
                System.out.print(c);
            }
            System.out.println();
        }
    }
}
