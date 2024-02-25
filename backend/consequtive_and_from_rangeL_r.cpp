#include<bits/stdc++.h>
int main(){
    int t;
    cin>>t;
    int a[n];
    for(int i=0;i<n;i++){
        cin>>a[i];
    }
    while(t--){
        int l,r,n;
        cin>>l>>r;
        int m[n][31]
        for(int i=0;i<n;i++){
            for(int j=0;j<=31;j++){
                if(a[i]&(1<<j)){
                    a[i][j]+=a[i-1][j]+1;
                }
                else{
                    a[i][j]=a[i-1][j];
                }
            }
        }
        int num=0;
        if(l==0){
            for(int j=0;j<=31;j++){
                if(a[r][j]==(r-l+1)){
                    num+=pow(2,j);
                }
            }
        }
        else{
            for(int j=0;j<=31;j++){
                if((a[r][j]-a[l-1][j])==(r-l+1)){
                    num+=pow(2,j);
                }
            }
        }
    }
}