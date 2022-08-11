#include <iostream>
using namespace std;

int main(){
    int nome = 10;
    int& ref = nome;

    cout << nome << " " << ref << endl;
    
    nome += 5;

    cout << nome << " " << ref << endl;

    return 0;
}