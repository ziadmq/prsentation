filepath = 'src/locales/ar.json'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix double (JO MAP)
content = content.replace('(JO MAP) (JO MAP)', '(JO MAP)')
content = content.replace('(JO MAP)(JO MAP)', '(JO MAP)')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Double JOMAP fixed!")
