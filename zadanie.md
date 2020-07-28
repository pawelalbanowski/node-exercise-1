# Praca z kodem asynchronicznym

## Zadanie

Stwórz trzy wersje programu który odczyta plik `numbers.txt` i zwróci informację o liczbie nieparzystych liczb w pliku.

Do odczytania pliku wykorzystaj metodę `fs.readFile` z modułu `fs`, której standardowe wywołanie wygląda tak:

```javascript
fs.readFile('/etc/passwd', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

Każda wersja programu musi zawierać metodę `readFileAsArray` która zwraca tablicę odczytanych linii z pliku.

Różnica pomiędzy wersjami dotyczy sposobu wywołania metody `readFileAsArray`.

---

Przed napisaniem pierwszej wersji stwórz pomocniczy moduł `utlis.js`, eksportujący dwie pomocnicze metody, które będzie można wykorzystać w zadaniu:

- metoda `splitByNewLine` - która podzieli otrzymany ciąg znaków (dane z pliku) na tablicę linii - podzieloną na podstawie znaku końca linii `\n`. Każda wartość w zwracanej tablicy jest stringiem i powinna być pozbawiona spacji.
- metoda `countOdd` - metoda otrzyma tablicę liczb zapisanych w postaci stringów i musi zwrócić z otrzymanej tablicy liczbę nieparzystych liczb

---

**Wersja 1. Plik callback.js. Metoda `readFileAsArray` przyjmuje ścieżkę do pliku i funkcję callback**

```javascript
const readFileAsArray = (file, cb) => {};
```

Funkcja callback (`cb`) musi zostać wywołana w standardowej dla Node.js konwencji `cb(err, data)`. Funkcja callback `cb` zostanie wywołana z odczytaną listą linii z pliku.

Jeżeli w metodzie `readFileAsArray` wystąpi błąd to należy go spropagować w górę używając przekazanej funkcji callback.

Aby sprawdzić, czy błąd jest dobrze obsłużony, wystarczy przekazać do metody złą ścieżkę pliku.

Wywołanie metody `readFileAsArray` powinno wyglądać tak:

```javascript
readFileAsArray('./numbers.txt', (err, lines) => {
  // logika do znalezienia liczby nieparzystych liczb
});
```

---

**Wersja 2. Plik promises.js. Druga wersja programu powinna zawierać metodą `readFileAsArray` przyjmującą tylko ścieżkę do pliku i zwracającą Promise.**

```javascript
const readFileAsArray = (file) => {
  return new Promise((resolve, reject) => {});
};
```

W przypadku poprawnego rozwiązania promisa (metoda `resolve`) lista linii z pliku zostanie przekazana dalej. Należy pamiętać
o odrzuceniu promisa w przypadku wytępienia błędu (metoda `reject`).

Wywołanie metody `readFileAsArray` powinno wyglądać tak (należy pamiętać o obsłużeniu błędu):

```javascript
readFileAsArray('ścieżka do pliku')
  .then((lines) => {
    // logika do znalezienia liczby nieparzystych liczb
  })
  .catch(/*obsługa bledu*/);
```

**Wersja 3. Plik async.js. Metoda `readFileAsArray` pozostaje w wersji zwracającej obiekt Promise, zmienia się tylko jej wywołanie.**

Wywołanie metody `readFileAsArray` powinno wykorzystać składnię `async/await` z użyciem try/catch

```javascript
const lines = await readFileAsArray('./numbers.txt');
```

**Wersja 4. (bonus) Zapisz program używając natywnej wersji modułu `fs` zwracającej obiekt Promise**

Przykład użycia natywnego modułu `fs` wspierającego Promise:

```javascript
const fs = require('fs');
const fsPromises = fs.promises;

async function showFile() {
  const content = await fsPromises.readFile(__filename, 'utf-8');
  console.log(content.toString());
}

showFile();
```

### Wskazówka

Aby uzyskać linię odczytane z pliku można posłużyć sie poniższym kodem.

```javascript
const lines = fileData.split('\n');
```

Metoda `fs.readFile` domyślnie zwraca dane w postaci bufora aby skonwertować go na wartość tekstową należy wywołać
metodę `.toString()` na otrzymanym buforze danych. W metodzie `.toString()` możemy podać docelowe kodowanie,
domyślnie używane jest `utf8`.
