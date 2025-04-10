'use client';

import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

interface Produto {
  id: number;
  nome: string;
  preco: string;
  imagem: string;
  descricao: string;
}

const produtos: Produto[] = [
  { id: 1, nome: "AirPods Max", preco: "R$ 180,00", imagem: "/airpods-max.jpeg", descricao: "AirPods Max com som de alta qualidade." },
  { id: 2, nome: "AirPods 2", preco: "R$ 120,00", imagem: "/airpods-2.jpeg", descricao: "AirPods 2 com conexão rápida e eficiente." },
  { id: 3, nome: "AirPods Pro 2", preco: "R$ 150,00", imagem: "/airpods-pro-2.jpeg", descricao: "AirPods Pro 2 com cancelamento de ruído." },
  { id: 4, nome: "Capinha iPhone 7", preco: "R$ 50,00", imagem: "/capinha-iphone7.jpeg", descricao: "Capinha resistente para iPhone 7." },
  { id: 5, nome: "Capinha iPhone 8", preco: "R$ 50,00", imagem: "/capinha-iphone8.jpeg", descricao: "Proteção elegante para iPhone 8." },
  { id: 6, nome: "Capinha iPhone X", preco: "R$ 50,00", imagem: "/capinha-iphonex.jpeg", descricao: "Capinha moderna para iPhone X." },
  { id: 7, nome: "Capinha iPhone 11", preco: "R$ 50,00", imagem: "/capinha-iphone11.jpeg", descricao: "Capinha para iPhone 11 de alta qualidade." },
  { id: 8, nome: "Capinha iPhone 12", preco: "R$ 50,00", imagem: "/capinha-iphone12.jpeg", descricao: "Estilo e proteção para iPhone 12." },
  { id: 9, nome: "Capinha iPhone 13", preco: "R$ 50,00", imagem: "/capinha-iphone13.jpeg", descricao: "Capinha durável para iPhone 13." },
  { id: 10, nome: "Capinha iPhone 14", preco: "R$ 50,00", imagem: "/capinha-iphone14.jpeg", descricao: "Design fino para iPhone 14." },
  { id: 11, nome: "Capinha iPhone 15", preco: "R$ 50,00", imagem: "/capinha-iphone15.jpeg", descricao: "Proteção premium para iPhone 15." },
  { id: 12, nome: "Capinha iPhone 16 Pro Max", preco: "R$ 60,00", imagem: "/capinha-iphone16promax.jpeg", descricao: "Capinha resistente para iPhone 16 Pro Max." },
  { id: 13, nome: "Carregador iPhone", preco: "R$ 90,00", imagem: "/carregador-iphone.jpeg", descricao: "Carregador rápido para iPhone." },
  { id: 14, nome: "Carregador Android", preco: "R$ 70,00", imagem: "/carregador-android.jpeg", descricao: "Carregador compatível com Android." },
];

export default function ProdutoPage() {
  const params = useParams();
  const router = useRouter();
  const id = Number(params.id);
  const produto = produtos.find((p) => p.id === id);

  if (!produto) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Produto não encontrado</h1>
        <button onClick={() => router.push('/')} className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-300">Voltar para Início</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-8 flex flex-col items-center">
      <Image src={produto.imagem} alt={produto.nome} width={300} height={300} className="rounded-2xl mb-6" />
      <h1 className="text-4xl font-bold mb-4 text-center">{produto.nome}</h1>
      <p className="text-2xl mb-2">{produto.preco}</p>
      <p className="text-lg mb-8 text-center max-w-xl">{produto.descricao}</p>
      <button onClick={() => router.push('/')} className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-300">Voltar para Início</button>
    </div>
  );
}
