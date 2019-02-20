import java.util.Scanner;
 class main {
 public static void main(String[] args) {
  	Scanner inp = new Scanner(System.in);
  // ask for 1st input
  System.out.print("Input first number: ");
  int num1 = inp.nextInt();
   //ask for 2nd input
  System.out.print("Input second number: ");
  int num2 = inp.nextInt();
   //ask for 3rd input
  System.out.print("Input third number: ");
  int num3 = inp.nextInt();
   //ask for 4th input
  System.out.print("Input fourth number: ");
  int num4 = inp.nextInt();
  //out puts your avg 
  System.out.println("Average of five numbers is: " + (num1 + num2 + num3 + num4 ) / 4);
  }
}
