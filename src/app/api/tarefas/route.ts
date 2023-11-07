import { NextResponse } from "next/server";

let tarefas = ['Estudar', 'Treinar', 'Trabalhar'];

export async function GET(request: Request) {
  return NextResponse.json(tarefas);
}

export async function POST(request: Request) {
  const data = await request.json();
  tarefas.push(data.name);
  return NextResponse.json(tarefas);
}

// http://localhost:3000/api/tarefas/index=0
export async function PUT(request: Request) {
  const { searchParams } = new URL(request.url);
  const index = searchParams.get("posicao");
  const data = await request.json();
  tarefas[Number(index)] = data.name;
  return NextResponse.json({ ok: true });
}