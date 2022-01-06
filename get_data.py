# Setting the data here
def _data(response_info):
    print("State in " + response_info[0]['country'])

    for i in range(len(response_info)):
        print("State: " + response_info[i]['state'])
        print("population: " + str(response_info[i]['population']))
        actual_data(response_info, i)


# Getting the data from actual data set sections
def actual_data(response_info, num):
    # for actual_data_set in response_info[0]['actuals']:
    #     print(actual_data_set)
    print("positiveTests Cases: " + str(response_info[num]['actuals']['positiveTests']))
    print("negativeTests Cases: " + str(response_info[num]['actuals']['negativeTests']))

    print("infection rate: " + str(response_info[num]['metrics']['infectionRate']))
