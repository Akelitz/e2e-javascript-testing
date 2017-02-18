# End-to-End Javascript Testing
In questo repository trovate il codice della demo che ho presentato durante la mia sessione **_End-to-End Javascript Testing_** all'evento **_DevOps@Work 2017_**. 

Questa demo utilizza [Selenium](http://www.seleniumhq.org) e [Protractor](http://www.protractortest.org) per automatizzare i test end-to-end di un'applicazione ASP.NET Core.

* Sulla branch [master](https://github.com/Akelitz/e2e-javascript-testing/tree/master) trovare l'applicazione sotto test.
* Sulla branch [withoutPageObjects](https://github.com/Akelitz/e2e-javascript-testing/tree/withoutPageObjects) trovate l'implementazione dei test senza usare il pattern Page Objects.
* Sulla branch [withPageObjects](https://github.com/Akelitz/e2e-javascript-testing/tree/withPageObjects) trovate l'implementazione dei test usando il pattern Page Objects.

Per eseguire i test è necessario:

1. installare NodeJS sul proprio PC scaricando il setup appropriato dal [sito di Node](https://nodejs.org);
2. installare Proctrator usando NPM per mezzo del comando `npm install -g protractor` da un qualsiasi prompt dei comandi;
3. aggiornare il WebDriver di Selenium per mezzo del comando `webdriver-manager update` da un qualsiasi prompt dei comandi;
4. aprire un prompt dei comandi nella cartella **Tests** che si trova all'interno del progetto ed eseguire il comando `protractor config.js`.

> Questa demo utilizza direttamente il driver per Chrome. Se volete cambiare questa impostazione potete andare nel file `config.js` e modifica l'impostazione come previsto dalla configurazione di Protractor.
