## Документация

<table>
    <caption><b>Таблица - Описание модулей</b></caption>
    <thead>
        <tr>
            <td>Модуль</td>
            <td>Команда Makefile</td>
            <td>URL</td>
            <td>Описание</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="2"><a href="Makefile">Makefile</a></td>
            <td>make gpi_wi</td>
            <td rowspan="2">-</td>
            <td>Команда копирует файлы настроек .env и устанавливает пакеты npm</td>
        </tr>
        <tr>
            <td>make gpi_wc</td>
            <td>Команда копирует файлы настроек .env</td>
        </tr>
        <tr>
            <td><a href="gpi_ba">gpi_ba</a></td>
            <td>make gpi_wba</td>
            <td>http://localhost:3000</td>
            <td>ba - backend API: Node JS Express server (сервер возвращает JSON данные)</td>
        </tr>
        <tr>
            <td><a href="gpi_ds">gpi_ds</a></td>
            <td>make gpi_wds</td>
            <td>http://localhost:3001</td>
            <td>ds - documentation Swagger: React JS (удобный сайт, который документально показывает GET запросы)</td>
        </tr>
        <tr>
            <td><a href="gpi_fr">gpi_fr</a></td>
            <td>make gpi_wfr</td>
            <td>http://localhost:3002</td>
            <td>fr - frontend radio: React JS (сайт радио)</td>
        </tr>
        <tr>
            <td><a href="gpi_gp">gpi_gp</a></td>
            <td>make gpi_wgp</td>
            <td>http://localhost:8080</td>
            <td>gp - GitHub pages: npm (для загрузки demo на gh-pages)</td>
        </tr>
    </tbody>
</table>

## Глянуть работу онлайн

<!-- > На GitHub pages нельзя поднять Node JS сервер. -->
<!-- >  -->
<!-- > Поэтому, для корректной работы демонстрации на gh-pages нужно запустить у себя модуль `gpi_ba`. -->

<table>
    <caption><b>Таблица - Демонстрация на GitHub pages</b></caption>
    <thead>
        <tr>
            <td>Модуль</td>
            <td>Ссылка</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>gpi_ds</td>
            <td>https://pavel-innokentevich-galanin.github.io/react-express-webradio/gpi_ds/</td>
        </tr>
        <tr>
            <td>gpi_fr</td>
            <td>https://pavel-innokentevich-galanin.github.io/react-express-webradio/gpi_fr/</td>
        </tr>
    </tbody>
</table>
