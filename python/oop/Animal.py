from abc import ABC, abstractmethod
class Animal(ABC):

    def __init__(self,name:str,age:int,food:list[str]):
        self.name = name
        self.age = age
        self.food = food
        self.__health_level = 100  # 私有屬性
    
    # methods
    def eat(self):
        '''
        動物進食
        '''
        print(f"{self.name} is {''.join(self.food)}")
   
    def hibernation(self):
        '''
        冬眠
        '''
        print(f"{self.name}會冬眠嗎")

    def get_sick(self):
        '''
        動物生病，健康值下降
        '''
        self.__health_level -= 20
        print(f"{self.name}的健康值下降了。現在是： {self.__health_level}.")


    # abstract方法：所有動物必須具備的
    @abstractmethod
    def attack(self):
        """抽象方法：定義攻擊行為"""
        pass

    @abstractmethod
    def affend(self):
        """抽象方法：定義防禦行為"""
        pass