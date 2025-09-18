class Animals:

    def __init__(self,name:str,age:str,food:list[str]):
        self.name = name
        self.age = age
        self.food = food
        self.__health_level = 100  # 這是私有屬性
    
    # methods
    def eat(self):
        print(f"{self.name}","is",f"{self.food}")

    def environment(self):
        print("it's depends on specice")

    def get_sick(self):
        self.__health_level -= 20
        print(f"{self.name} 的健康值下降了。")