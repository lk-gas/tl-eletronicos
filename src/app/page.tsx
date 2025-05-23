'use client';

import Head from "next/head";
import React, { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Produto {
  id: number;
  nome: string;
  preco: string;
  imagem: string;
}

export default function Home() {
  const router = useRouter();
  const [carrinho, setCarrinho] = useState<Produto[]>([]);
  const [busca, setBusca] = useState("");

  const produtos: Produto[] = [
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
    { id: 14, nome: "Carregador Android", preco: "R$ 70,00", imagem: "/carregador-android.jpeg" }
  ];

  const adicionarCarrinho = (produto: Produto) => {
    setCarrinho([...carrinho, produto]);
  };

  const removerDoCarrinho = (index: number) => {
    const novoCarrinho = [...carrinho];
    novoCarrinho.splice(index, 1);
    setCarrinho(novoCarrinho);
  };

  const produtosFiltrados = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>TL Eletrônicos</title>
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-black via-black to-blue-900 text-white flex flex-col items-center p-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mt-10"
        >
          <h1 className="text-7xl font-light tracking-wide">TL</h1>
          <h2 className="text-3xl font-semibold tracking-wider mt-2">Eletrônicos</h2>
          <Link href="#produtos">
            <Button className="bg-blue-600 hover:bg-blue-700 rounded-2xl px-8 py-3 mt-8">
              Conheça nossos produtos
            </Button>
          </Link>
        </motion.div>

        <section id="produtos" className="mt-20 w-full max-w-6xl px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Produtos em Destaque</h2>

          <input
            type="text"
            placeholder="Busque um produto..."
            className="border p-2 rounded-lg w-full max-w-md text-black mb-8 block mx-auto"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {produtosFiltrados.map((produto) => (
              <motion.div
                key={produto.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                onClick={() => router.push(`/produto/${produto.id}`)}
                className="cursor-pointer"
              >
                <Card className="rounded-2xl shadow-md hover:shadow-lg bg-black border border-white">
                  <CardContent className="flex flex-col items-center p-4">
                    <Image
                      src={produto.imagem}
                      alt={produto.nome}
                      width={160}
                      height={160}
                      className="h-40 object-contain mb-4"
                    />
                    <h2 className="text-xl font-semibold mb-2 text-center">{produto.nome}</h2>
                    <p className="text-lg mb-4">{produto.preco}</p>
                    <Button onClick={(e) => { e.stopPropagation(); adicionarCarrinho(produto); }} className="bg-white text-black hover:bg-gray-300">
                      Adicionar ao Carrinho
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <div className="text-center mt-20">
          <h2 className="text-2xl font-semibold mb-4">Nos siga em nossas redes sociais</h2>
          <div className="flex justify-center gap-6">
            <Link href="https://www.instagram.com/tl_eletronicos_?igsh=cmV6cmhqMTA0eTgy&utm_source=qr" target="_blank">
              <Button className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-8 py-3 rounded-full hover:opacity-80">
                Instagram
              </Button>
            </Link>
            <Link href="https://wa.me/5511990111822" target="_blank">
              <Button className="bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-400">
                WhatsApp
              </Button>
            </Link>
          </div>
        </div>

        {carrinho.length > 0 && (
          <div className="fixed top-4 right-4 p-4 bg-black text-white rounded-2xl shadow-lg w-64 border border-white">
            <h2 className="text-lg font-semibold mb-2">Carrinho ({carrinho.length})</h2>
            <ul>
              {carrinho.map((item, index) => (
                <li key={index} className="flex justify-between items-center mb-2">
                  <span>{item.nome}</span>
                  <button
                    onClick={() => removerDoCarrinho(index)}
                    className="text-red-400 hover:text-red-600"
                  >
                    Remover
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
