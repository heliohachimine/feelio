import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function CarouselSection() {
  return (
    <section className="bg-gray-900 py-16 text-white">
      <h2 className="text-3xl text-center font-semibold mb-8">Histórias de quem usa o Feelio</h2>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={5000}
        className="max-w-3xl mx-auto"
      >
        <div>
          <img src="/images/user1.jpg" alt="Usuário feliz" className="rounded-lg" />
          <p className="legend bg-black/70">"O Feelio me ajudou a entender meus ciclos emocionais!"</p>
        </div>
        <div>
          <img src="/images/user2.jpg" alt="Usuária pensativa" className="rounded-lg" />
          <p className="legend bg-black/70">"Finalmente me sinto no controle da minha rotina."</p>
        </div>
      </Carousel>
    </section>
  );
}
