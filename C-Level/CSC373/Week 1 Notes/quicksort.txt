def quicksort(array):
    """
    Quicksort is a divide and conquer sorting algorithm.
    You start by choosing a pivot and then by moving all elements that are
    less than the pivot to the left and all other elements to the right.
    Then, you recursively repeat these steps.
    """

    # Base case
    # If there's only 1 element in the array, just return it
    if len(array) <= 1:
        return array

    left = 0
    right = len(array) - 2
    pivot = array[-1]

    # Here, I'm comparing elements from both sides (left and right) of the array.
    while left < right:
        # If the left element is greater than the pivot and the right element is less, then we swap.
        if array[left] > pivot and array[right] < pivot:
            array[left], array[right] = array[right], array[left]
            left += 1
            right -= 1

        # If the left element is less than the pivot, we increment left by 1.
        if array[left] < pivot:
            left += 1

        # If the right element is greater than the pivot, we decrement right by 1.
        if array[right] > pivot:
            right -= 1

    # If the element where the left & right pointer meets is less than pivot, we increment left by 1 to include it
    # in the left subarray.
    if array[left] < pivot:
        left += 1

    # Recursion
    return quicksort(array[:left]) + [pivot] + quicksort(array[left:-1])


print(quicksort([3, 7, 6, 5, 2, 1, 4]))
print(quicksort([3, 5, 6, 1, 7, 2]))
print(quicksort([7, 2]))
print(quicksort([5, 6, 7]))
