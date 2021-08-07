import { CreateArticleDto } from '@app/article/dto/createArticle.dto';

export type UpdateArticlesParamsType = {
  slug: string;
  currentUserId: number;
  updateArticleDto: CreateArticleDto;
};
