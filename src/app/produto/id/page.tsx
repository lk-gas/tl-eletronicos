'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';

const produtos = [
  { id: 1, nome: 'AirPods Max', preco: 'R$ 180,00', imagem: '/airpods-max.jpeg' },
  { id: 2, nome: 'AirPods 2', preco: 'R$ 120,00', imagem: '/airpods-2.jpeg' },
  { id: 3, nome: 'AirPods Pro 2', preco: 'R$ 150,00', imagem: '/airpods-pro-2.jpeg' },
  { id: 4, nome: 'Capinha iPhone 7', preco: 'R$ 50,00', imagem: '/capinha-iphone7.jpeg' },
  { id: 5, nome: 'Capinha iPhone 8', preco: 'R$ 50,00', imagem: '/capinha-iphone8.jpeg' },
  { id: 6, nome: 'Capinha iPhone X', preco: 'R$ 50,00', imagem: '/capinha-iphonex.jpeg' },
  { id: 7, nome: 'Capinha iPhone 11', preco: 'R$ 50,00', imagem: '/capinha-iphone11.jpeg' },
  { id: 8, nome: 'Capinha iPhone 12', preco: 'R$ 50,00', imagem: '/capinha-iphone12.jpeg' },
  { id: 9, nome: 'Capinha iPhone 13', preco: 'R$ 50,00', imagem: '/capinha-iphone13.jpeg' },
  { id: 10, nome: 'Capinha iPhone 14', preco: 'R$ 50,00', imagem: '/capinha-iphone14.jpeg' },
  { id: 11, nome: 'Capinha iPhone 15', preco: 'R$ 50,00', imagem: '/capinha-iphone15.jpeg' },
  { id: 12, nome: 'Capinha iPhone 16 Pro Max', preco: 'R$ 60,00', imagem: '/capinha-iphone16promax.jpeg' },
  { id: 13, nome: 'Carregador iPhone', preco: 'R$ 90,00', imagem: '/carregador-iphone.jpeg' },
  { id: 14, nome: 'Carregador Android', preco: 'R$ 70,00', imagem: '/carregador-android.jpeg' },
];

export default function ProdutoPage() {
  const params = useParams();
  const produtoId = Number(params?.id);
  const produto = produtos.find(p => p.id === produtoId);

  if (!produto) {
    return <div className="text-center mt-20 text-black">Produto não encontrado!</div>;
  }

  return (
    <div className="min-h-screen p-6 bg-white flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-extrabold mb-6 text-black"
      >
        {produto.nome}
      </motion.h1>
      <Image
        src={produto.imagem}
        alt={produto.nome}
        width={300}
        height={300}
        className="rounded-2xl shadow-md object-contain"
      />
      <p className="text-2xl font-semibold mt-4 text-black">{produto.preco}</p>

      <div className="flex gap-4 mt-8">
        <Link href="/">
          <Button>Voltar</Button>
        </Link>
        <Link href="https://wa.me/5511990111822" target="_blank">
          <Button>Comprar via WhatsApp</Button>
        </Link>
      </div>
    </div>
  );
}
