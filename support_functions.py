"""
Cheatko supporting functions
"""
# First let's build index of letters
def index_letters(dataset): #Eulier number calculation
    index = []
    i = 0
    while i < len(dataset):
        n = 0
        while n < len(dataset[i]):
            if dataset[i][n] in index:
                pass
            else:
                index.append(dataset[i][n])
            n = n + 1
        i = i + 1
    return(index)

def frequency(data,index):
    i = 0
    freq = []
    
    while i < len(index):
        n = 0
        f1 = []
        f1.append(index[i])
        f1.append(0)
        f1.append(0)
        f1.append(0)
        f1.append(0)
        f1.append(0)
        f1.append(0)
        freq.append(f1)
        while n < len(data):
            if data[n].find(index[i]) != -1:
                temp = freq[i]
                temp[6] = temp[6] + 1
                if data[n].find(index[i]) == 0:
                    temp[1] = temp[1] + 1
                if data[n].find(index[i]) == 1:
                    temp[2] = temp[2] + 1
                if data[n].find(index[i]) == 2:
                    temp[3] = temp[3] + 1
                if data[n].find(index[i]) == 3:
                    temp[4] = temp[4] + 1
                if data[n].find(index[i]) == 4:
                    temp[5] = temp[5] + 1
                freq[i] = temp
            n = n + 1
        i = i + 1
    return(freq)
