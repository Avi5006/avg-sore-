
import java.util.Scanner;

class apples{
    public static void main(String args[]){
        Scanner input = new Scanner(System.in);
        // var
        double x, y;
        // putting in the inputs
        x = input.nextDouble();
        y = input.nextDouble();
        //out puts               roots    power by 2           power by 2                     
        System.out.println(Math.sqrt(Math.pow(x, 2)+ Math.pow(y, 2)));
    }
}
