export interface LetrasTarjeta {
    titulo: string;
    texto?: string;
    descripcion: string;
    literales?: string[];
    tagA: TagA;
}

interface TagA {
    text: string;
    href: string;
    titulo: string;
}