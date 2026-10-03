import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const sections = [
  {
    id: 'modeling-section',
    title: '3D modeling',
    layout: 'grid',
    items: [
      { title: 'Isometric bedroom', img: '/img/3.png', text: 'This 3D isometric bedroom is a masterclass in soft-minimalism, utilizing a harmonious mint-and-peach color palette, rounded "clay-style" geometry, and strategic ambient lighting to create a tranquil, biophilic retreat within a compact diorama.' },
      { title: 'Isometric bakery', img: '/img/1.png', text: 'This 3D isometric bakery diorama employs a warm, "toasted" color palette and organized structural layering to create an inviting retail space, blending clean Scandinavian-inspired minimalism with charmingly simplified assets that prioritize a cozy, artisanal atmosphere.' },
      { title: '3D alpine house', img: '/img/4.png', text: 'This 3D facade features a striking dual-gable silhouette that blends modern A-frame architecture with a warm "creamsicle" palette, utilizing vertical glass ribbons and rhythmic timber accents to create a clean, contemporary take on a mountain retreat.' },
    ],
  },
  {
    id: 'poster-section',
    title: 'Poster design',
    layout: 'grid',
    items: [
      { title: 'Survival', img: '/img/sur.png', lines: ['No.003 || SURVIVAL', 'A feathered heart, with purpose keen,', 'Clutches silver in a twilight scene.'] },
      { title: 'Rebirth', img: '/img/reb.png', lines: ['No.011 || REBIRTH', 'Before and after, cycles turn,', 'As lessons learned, and spirits burn.', 'A fresh beginning, pure and bright.', 'Through transformations, grand and small,'] },
      { title: 'Cracked', img: '/img/cra.png', lines: ['No.010 || CRACKED', 'A fragile shell, begins to fray,', 'A profound vulnerability on display.', 'A glimpse of honesty is seen.', 'Picking up pieces, one by one,'] },
    ],
  },
  {
    id: 'web-section',
    title: 'Web development',
    layout: 'stack',
    items: [
      { title: 'TradeTime', img: '/img/homepage.png', href: 'https://www.figma.com/proto/6f84eTidHmfcYpnED6RjkJ/tradetime---Section2?node-id=613-1400&p=f&t=XGT043wfDaoBF7vN-1&scaling=min-zoom&content-scaling=fixed&page-id=548%3A2960&starting-point-node-id=613%3A1400', text: 'TradeTime is a community-driven, local "TimeBank" platform designed to help neighbors exchange skills without using traditional money. The application allows users to "earn" hours by helping others and then "spend" those hours to receive help themselves.' },
      { title: 'Awesome Todos', img: '/img/todo.png', href: 'https://todoapp-by0z.onrender.com/', text: 'Awesome Todos is a digital checklist that helps you organize and track your daily tasks in real time, letting you instantly save, track, and permanently delete tasks through a simple, interactive interface.' },
      { title: 'UServe', img: '/img/userve.png', text: 'A full-stack digital portal for Barangay Ungka II that lets residents register for accounts, report community incidents with photos, browse and join local events, and view barangay/SK/health center officials' },
      { title: 'Product showcase', img: '/img/prod.png', text: 'Creating high-impact visual strategy that uses minimalist environments, dramatic lighting, and "hero" 3D perspectives to strip away distractions and elevate a product into a premium, functional piece of art.' },
    ],
  },
];

const Card = ({ item }) => {
  const body = (
    <>
      <img src={item.img} alt={item.title} loading="lazy" />
      <div className="card-text">
        <h3>{item.title}{item.href && <span className="card-ext"> (opens in new tab)</span>}</h3>
        {item.lines ? (
          <p>{item.lines.map((l, i) => (<span key={i}>{l}<br /></span>))}</p>
        ) : (
          <p>{item.text}</p>
        )}
      </div>
    </>
  );

  return item.href ? (
    <a className="card" href={item.href} target="_blank" rel="noreferrer">{body}</a>
  ) : (
    <div className="card">{body}</div>
  );
};

export const Projects = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.replace('#', ''));
    if (!el) return;
    const t = setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
    return () => clearTimeout(t);
  }, [hash]);

  return (
    <section className="split split-sticky">
      <div className="split-title">
        <h1>Projects</h1>
        <nav className="section-nav" aria-label="Project categories">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`}>{s.title}</a>
          ))}
        </nav>
      </div>

      <div className="split-body">
        {sections.map((s) => (
          <div className="project-group" id={s.id} key={s.id}>
            <h2 className="group-title">{s.title}</h2>
            <div className={`cards cards-${s.layout}`}>
              {s.items.map((item) => (<Card item={item} key={item.title} />))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
