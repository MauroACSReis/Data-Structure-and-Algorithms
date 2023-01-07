/*
Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.
*/

/*
[1,7,3,6,5,6]
totalSum = 28
leftmostPivotIndex = 3
28 - 0 - 1 = 0? não
28 - 1 - 7 = 7? não
28 - 3 - 8 = 8? não
28 - 6 - 11 = 11? sim
leftIndex = 0 + 1 + 7 + 8 (11 deu)
*/

var pivotIndex = function(nums) {
    // somas começam por 0
    let totalSum = 0;
    let leftSum = 0;

    // pegar cada elemento e incrementar no totalSum
    nums.forEach((e) => {
        totalSum += e
    })
    // loop for para verificar cada elemento da array nums e incrementar à soma
    for (let i=0; i<nums.length; i++) {
// condição para o loop for retornar o elemento caso satisfaça a condição
        if (totalSum - leftSum - nums[i] === leftSum) {
        return i
        } 
                // condição para o loop for só adicionar à soma caso a soma não seja igual ao leftSum
        leftSum += nums[i]
    }
    // caso não encontre a condição retorna -1 como diz no enunciado
        return -1
    }
