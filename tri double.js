import java.math.*; 
import java.util.Scanner; 
//start
public class Pitagor { 
public static void main (String[] args){
System.out.println(pitagor(in1(),in2())); }
//1st input
 public static int in1 (){
 Scanner input = new Scanner(System.in); System.out.println("Side A"); int a = input.nextInt(); return a; }
 //2nd input
 public static int in2 (){ 
Scanner input = new Scanner(System.in); System.out.println("	Side B"); int b = input.nextInt(); return b; } 
public static double pitagor (int x , int y){ double c = Math.sqrt((x*x)+(y*y)); return c; } }
