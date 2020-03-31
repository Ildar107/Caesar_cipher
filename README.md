# Caesar_cipher


### Установка NPM модулей

```
npm install
```

### Запуск приложения

```
npm run start -- аргументы
```
Пример:

```
npm run start -- -a encode -s 2 -i "./input.txt" -o "./output.txt"
```
Файлы input.txt и output.txt в данном случае лежат в папке ./bin/src

### Доступные команды

```
-a --action : одно из действий decode/encode
-s --shift: размер смещения алфавита
-i --input: путь к входному файлу
-o --output: путь к выходному файлу
```
