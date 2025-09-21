from oop.Animals import Animals

class Lion(Animals):
    def __init__(self, name, age, food):
        super().__init__(name, age, food)

    def eat(self):
        return super().eat()
    
    def environment(self):
        print("溫暖")