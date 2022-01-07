#declare 2d array to store covide datas
w, h = 100, 100
data = [[0 for x in range(w)] for y in range(h)] 

# Setting the data here
def _data(response_info):
    print("State in " + response_info[0]['country'])

    for i in range(len(response_info)):
        print("State: " + response_info[i]['state'])
        
        data[i][i+4] = response_info[i]['state']
        #print("population: " + str(response_info[i]['population']))
        data[i][i] = response_info[i]['population']
        actual_data(response_info, i)


# Getting the data from actual data set sections
def actual_data(response_info, num):
    # for actual_data_set in response_info[0]['actuals']:
    #     print(actual_data_set)
    #print("positiveTests Cases: " + str(response_info[num]['actuals']['positiveTests']))
    data[num][num + 1] = (response_info[num]['actuals']['positiveTests'])
    #print("negativeTests Cases: " + str(response_info[num]['actuals']['negativeTests']))
    data[num][num + 2] = (response_info[num]['actuals']['negativeTests'])
    #print("infection rate: " + str(response_info[num]['metrics']['infectionRate']))
    data[num][num + 3] = (response_info[num]['metrics']['infectionRate'])
    print("population: " + str(data[num][num]))
    print("positiveTests Cases: " + str(data[num][num + 1]))
    print("negativeTests Cases: " + str(data[num][num + 2]))
    print("infection rate: " + str(data[num][num + 3]))
    print(num)


