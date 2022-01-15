def mergeSort(array):

    # Base case - When the length of array is 1
    if len(array) <= 1:
        return (0, array)

    # Mid of an array
    mid = len(array) // 2

    # calculating inversions_count for the left array.
    left_inv_count, left_array = mergeSort(array[:mid])

    # calculating inversions_count for the right array.
    right_inv_count, right_array = mergeSort(array[mid:])

    # Merging two sorted arrays.
    merged_inv_count, mergedArray = merge(left_array, right_array)

    return (left_inv_count + right_inv_count + merged_inv_count, mergedArray)


# Merging two sorted arrays.
def merge(a1, a2):
    inv_count = 0
    new_array = []
    a1_pointer = 0
    a2_pointer = 0

    while a1_pointer < len(a1) and a2_pointer < len(a2):
        # a[i] <= a[j] so no inversion
        if a1[a1_pointer] <= a2[a2_pointer]:
            new_array.append(a1[a1_pointer])
            a1_pointer += 1
        # There is an inversion (a[i] > a[j])
        else:
            inv_count += len(a1) - a1_pointer
            new_array.append(a2[a2_pointer])
            a2_pointer += 1

    while a1_pointer < len(a1):
        new_array.append(a1[a1_pointer])
        a1_pointer += 1

    while a2_pointer < len(a2):
        new_array.append(a2[a2_pointer])
        a2_pointer += 1

    return (inv_count, new_array)


# Given array is
arr = [83, 20, 9, 50, 115, 61, 17]
result, new_arr = mergeSort(arr)
print("Inversions Count =", result, "Merged Array =", new_arr)

arr = [1, 5, 4, 8, 10, 2, 6, 9, 3, 7]
result, new_arr = mergeSort(arr)
print("Inversions Count =", result, "Merged Array =", new_arr)

