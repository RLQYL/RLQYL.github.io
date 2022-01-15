def mergesort(array):
    """
    Mergesort is a divide and conquer sorting algorithm.
    It recursively divides the array into halves and sorts each half.
    """

    # Base case
    # If there's only 1 element in the array, just return it
    if len(array) <= 1:
        return array

    # Divide the array into 2 and recursive call mergesort on each half.
    middle = len(array) // 2
    left = mergesort(array[:middle])
    right = mergesort(array[middle:])

    return merge(left, right)


def merge(a1, a2):
    """
    Here, we'll merge the 2 halves
    """
    new_array = []
    while len(a1) > 0 and len(a2) > 0:
        if a1[0] < a2[0]:
            new_array.append(a1[0])
            a1.pop(0)
        elif a1[0] > a2[0]:
            new_array.append(a2[0])
            a2.pop(0)
        else:
            new_array.append(a1[0])
            new_array.append(a2[0])
            a1.pop(0)
            a2.pop(0)

    if len(a1) > 0:
        new_array += a1

    if len(a2) > 0:
        new_array += a2

    return new_array


print(mergesort([3, 7, 6, 5, 2, 1, 4]))
print(mergesort([3, 5, 6, 1, 7, 2]))
print(mergesort([7, 2]))
print(mergesort([5, 6, 7]))
