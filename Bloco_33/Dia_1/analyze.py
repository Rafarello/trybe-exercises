def analyze(text):
    report = ""

    count_words = len(text.split(" "))
    report += f"Número de palavras = {count_words}"
    return f"Número de palavras = {count_words}"

text_to_analyze = "Rafael Moraes da Rocha"

print(analyze(text_to_analyze))