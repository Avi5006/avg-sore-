
import java.util.Scanner;
class apples{
    public static void main(String args[]){
        Scanner input = new Scanner(System.in);
        double x, y;
        x = input.nextDouble();
        y = input.nextDouble();
        System.out.println(Math.sqrt(Math.pow(x, 2)+ Math.pow(y, 2)));
    }
}
