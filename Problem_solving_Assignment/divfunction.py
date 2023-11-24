def Course_flow(inprecourse,graph):
        visited = [False] * (max(graph) + 1)
        queue = []
        queue.append(inprecourse)
        visited[inprecourse] = True
        while queue:
            viscourse= queue.pop(0)
            print (viscourse,"course  is completed")
            for i in graph[viscourse]:
                if visited[i] == False:
                    queue.append(i)
                    visited[i] = True
        for i,j in graph.items():
            if(visited[i]==False):
                print(i,"course is completed")