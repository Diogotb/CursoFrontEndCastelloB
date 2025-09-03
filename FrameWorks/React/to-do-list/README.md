# Criando Diagramas com Mermaid

```mermaid

graph TD
    subgraph Interface["Navegador"]
        UI
    end

    subgraph Front["FrontEnd"]
        FrontEnd
    end

    subgraph Back["BackEnd"]
        BackEnd
    end

    subgraph Banco["Banco de Dados"]
        BD
    end

    %% Fluxos

    UI-->FrontEnd
    FrontEnd-->BackEnd
    BackEnd-->BD
    BD-->BackEnd
    BackEnd-->FrontEnd
    FrontEnd-->UI
```