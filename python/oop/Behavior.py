from abc import ABC, abstractmethod
class Behavior(ABC):

    # abstract
    @abstractmethod
    def attack():
        pass

    @abstractmethod
    def affend():
        pass