# 歐洲陸龜
from oop.Tortoise import Tortoise

# 繼承自父類別(Tortoise)，可以把該類別想成是孫子(Multilevel Inheritance)，它的上一輩是Single Inheritance
class Testudo_graeca(Tortoise):
    def __init__(self, name, age, food, speciceType):
        super().__init__(name, age, food, speciceType)