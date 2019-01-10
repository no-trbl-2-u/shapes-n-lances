declare var require: {
    <T>(path: string): T;
    (paths: string[], callback: (...modules: any[]) => void): void;
    ensure: (
        paths: string[],
        callback: (require: <T>(path: string) => T) => void
    ) => void;
};
interface HMR {
    accept: (file: string[], callback: () => any) => any
}
declare var module: {
  hot?: HMR;
};