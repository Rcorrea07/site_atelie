export function Divider() {
  return (
    <div className="flex items-center justify-center gap-4 w-full max-w-sm mx-auto my-0 opacity-70">
      
      {/* Linha da Esquerda (Efeito de Pesponto/Costura) */}
      <div className="flex-1 h-px border-t-[3px] border-dashed border-atelier-pink"></div>
      
      {/* Ícone de Coração no Meio */}
      <div className="text-atelier-pink animate-pulse">
        <img 
            width="24" 
            height="24" 
            src="https://img.icons8.com/ios-filled/50/e290b5/like.png" 
            alt="coração decorativo" 
            className="w-6 h-6"
        />
      </div>

      {/* Linha da Direita */}
      <div className="flex-1 h-px border-t-[3px] border-dashed border-atelier-pink"></div>
      
    </div>
  );
}
