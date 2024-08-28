//c++ In and Out

#include<bits/stdc++.h> 
using namespace std; 

int main() 
{ 
ifstream in("input.txt"); 
ofstream f("file2.txt"); 
	
while(!in.eof()) 
{ 
	string text; 
		
	getline(in, text); 

	f << text << endl; 
} 
return 0; 
}

