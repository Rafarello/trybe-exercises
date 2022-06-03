from Liquidificador import Liquidificador
from Pessoa import Pessoa

# Criando um Liquidificador:

liquidificador_vermelho = Liquidificador("Vermelho", 250, 220, 500)

liquidificador_vermelho.ligar(1)
print("Esta ligado?", liquidificador_vermelho.esta_ligado())
# Esta ligado? True
liquidificador_vermelho.desligar()
print("Esta ligado?", liquidificador_vermelho.esta_ligado())
# Esta ligado? False

pessoa_cozinheira = Pessoa("Jacquin", 1000)
pessoa_cozinheira.comprar_eletrodomestico(liquidificador_vermelho)

print(pessoa_cozinheira.__dict__)
