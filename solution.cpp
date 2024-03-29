```cpp
#include <iostream>
#include <vector>

using namespace std;

vector<vector<int>> multiply(vector<vector<int>>& A, vector<vector<int>>& B) {
    vector<vector<int>> result(A.size(), vector<int>(B[0].size()));
    for (int i = 0; i < A.size(); i++) {
        for (int j = 0; j < B[0].size(); j++) {
            for (int k = 0; k < A[0].size(); k++) {
                result[i][j] += A[i][k] * B[k][j];
            }
        }
    }
    return result;
}

int main() {
    vector<vector<int>> A = {{1, 2, 3}, {4, 5, 6}};
    vector<vector<int>> B = {{7, 8}, {9, 10}, {11, 12}};
    vector<vector<int>> result = multiply(A, B);
    for (int i = 0; i < result.size(); i++) {
        for (int j = 0; j < result[0].size(); j++) {
            cout << result[i][j] << " ";
        }
        cout << endl;
    }
    return 0;
}
```