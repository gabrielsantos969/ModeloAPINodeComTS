import Home from "../interfaces/Home";

const home = async (): Promise<Home> => {
    const home = new Home("Gabriel Santos", "https://github.com/gabrielsantos969", "https://www.linkedin.com/in/gabriel-santos-b53632196/");
    return home;
}

export { home, Home };