import { Button } from '@/components/button/button';
import { articles } from '@/content/text-content';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { ArticleCard } from '@/components/articles/card/article-card';

export const ArticlesSection = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center">
      <div className="flex w-full max-w-screen-2xl flex-col gap-y-8 px-2 py-8 sm:gap-y-16 sm:px-4 sm:py-32 lg:px-8 2xl:px-16">
        <div className="flex w-full flex-col items-center gap-y-4 sm:gap-y-8 lg:flex-row lg:justify-between">
          <h1 className="text-center text-3xl font-semibold text-slate-900 sm:text-4xl md:text-6xl lg:text-left">
            Articles by collectors
          </h1>
          <Button
            variant="card"
            size="none"
          >
            <div className="flex items-center gap-x-2">
              <p>More Articles</p>
              <AiOutlineArrowRight className="size-4" />
            </div>
          </Button>
        </div>
        <div className="flex flex-wrap gap-2">
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              title={article.title}
              desc={article.desc}
              imgSrc={article.imgPath}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
