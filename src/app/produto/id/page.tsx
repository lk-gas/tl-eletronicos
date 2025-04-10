'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const produtos = [
  { id: 1, nome: "AirPods Max", preco: "R$ 180,00", imagem: "/airpods-max.jpeg" },
  { id: 2, nome: "AirPods 2", preco: "R$ 120,00", imagem: "/airpods-2.jpeg" },
  { id: 3, nome: "AirPods Pro 2", preco: "R$ 150,00", imagem: "/airpods-pro-2.jpeg" },
  { id: 4, nome: "Capinha iPhone 7", preco: "R$ 50,00", imagem: "/capinha-iphone7.jpeg" },
  { id: 5, nome: "Capinha iPhone 8", preco: "R$ 50,00", imagem: "/capinha-iphone8.jpeg" },
  { id: 6, nome: "Capinha iPhone X", preco: "R$ 50,00", imagem: "/capinha-iphonex.jpeg" },
  { id: 7, nome: "Capinha iPhone 11", preco: "R$ 50,00", imagem: "/capinha-iphone11.jpeg" },
  { id: 8, nome: "Capinha iPhone 12", preco: "R$ 50,00", imagem: "/capinha-iphone12.jpeg" },
  { id: 9, nome: "Capinha iPhone 13", preco: "R$ 50,00", imagem: "/capinha-iphone13.jpeg" },
  { id: 10, nome: "Capinha iPhone 14", preco: "R$ 50,00", imagem: "/capinha-iphone14.jpeg" },
  { id: 11, nome: "Capinha iPhone 15", preco: "R$ 50,00", imagem: "/capinha-iphone15.jpeg" },
  { id: 12, nome: "Capinha iPhone 16 Pro Max", preco: "R$ 60,00", imagem: "/capinha-iphone16promax.jpeg" },
  { id: 13, nome: "Carregador iPhone", preco: "R$ 90,00", imagem: "/carregador-iphone.jpeg" },
  { id: 14, nome: "Carregador Android", preco: "R$ 70,00", imagem: "/carregador-android.jpeg" },
];

export default function ProdutoPage() {
  const params = useParams();
  const id = Number(params.id);
  const produto = produtos.find(p => p.id === id);

  if (!produto) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6">
        <h1 className="text-2xl font-bold">Produto não encontrado</h1>
        <Link href="/" className="mt-4 text-blue-400 underline">Voltar para Home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6">
      <Image
        src={produto.imagem}
        alt={produto.nome}
        width={200}
        height={200}
        className="mb-4"
      />
      <h1 className="text-3xl font-bold mb-2">{produto.nome}</h1>
      <p className="text-xl mb-4">{produto.preco}</p>
      <Link href="/" className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-300">Voltar</Link>
    </div>
  );
}
