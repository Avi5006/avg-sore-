import java.util.Scanner;
public class MadLib { 
    public static void main(String[] args){

        Scanner i = new Scanner(System.in);
        String noun, noun2;
        System.out.println("Enter a noun ");
        noun = i.nextLine();
        System.out.println("Enter a second noun: ");
        noun2 = i.nextLine();
       
     
        System.out.println("Mary had a little " + noun + "\nIts " + noun2 + " was silly as snow");
        System.out.println("And everywhere that Mary went");
        System.out.println("The " + noun + " was sure to go.");
        
 }
}
