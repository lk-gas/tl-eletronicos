'use client';

import React, { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { motion } from "framer-motion";
import Link from "next/link";

interface Produto {
  id: number;
  nome: string;
  preco: string;
  imagem: string;
}

export default function Home() {
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
    { id: 14, nome: "Carregador Android", preco: "R$ 70,00", imagem: "/carregador-android.jpeg" },
  ];

  const adicionarCarrinho = (produto: Produto) => {
    setCarrinho([...carrinho, produto]);
  };

  const produtosFiltrados = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white p-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-6 text-center"
      >
        TL Eletrônicos
      </motion.h1>

      <div className="flex flex-wrap justify-center mb-8 gap-4">
        <Input
          placeholder="Busque um produto..."
          className="max-w-md"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
        <Link href="https://www.instagram.com/tl_eletronicos_?igsh=cmV6cmhqMTA0eTgy&utm_source=qr" target="_blank">
          <Button>Nosso Instagram</Button>
        </Link>
        <Link href="https://wa.me/5599999999999" target="_blank">
          <Button>Fale no WhatsApp</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {produtosFiltrados.map((produto) => (
          <motion.div
            key={produto.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="rounded-2xl shadow-md hover:shadow-lg">
              <CardContent className="flex flex-col items-center p-4">
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  className="h-40 object-contain mb-4"
                />
                <h2 className="text-xl font-semibold mb-2 text-center">{produto.nome}</h2>
                <p className="text-lg mb-4">{produto.preco}</p>
                <Button onClick={() => adicionarCarrinho(produto)}>Adicionar ao Carrinho</Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {carrinho.length > 0 && (
        <div className="fixed bottom-4 right-4 p-4 bg-gray-800 text-white rounded-2xl shadow-lg">
          <h2 className="text-lg font-semibold mb-2">Carrinho ({carrinho.length})</h2>
          <ul>
            {carrinho.map((item, index) => (
              <li key={index}>{item.nome}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
