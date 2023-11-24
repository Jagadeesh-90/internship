from divfunction import Course_flow
from collections import defaultdict
class Training_Class:
    def __init__(self):
        self.graph = defaultdict(list)
    def Addclassroom(self,prerequisite,new):
        self.graph[prerequisite].append(new)
    
    def Course(self,startcourse):
        Course_flow(startcourse,self.graph)

n= ( int(input("enter pair of related courses")))
g=Training_Class()
for i in range(n):
    prerequisite,new=map(int,input().split())
    g.Addclassroom(prerequisite,new)
prereq_course=int(input())
g.Course(prereq_course)