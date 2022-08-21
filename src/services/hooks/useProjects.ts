import { getPrismicClient } from "../prismic";
import * as prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';
import { useQuery } from 'react-query'
export type Project = {
  id: string,
  name: string;
  description: string
};


async function getProjects(page: number){
  const { results, total_results_size } = await getPrismicClient().get({
    predicates: prismic.predicate.at('document.type', 'project'),
    fetch: ['publication.id', 'publication.name', 'publication.description'],
    pageSize: 10,
    page: page,
  });
  const totalCount = total_results_size;
  const projects = results.map( (project)=> {
    return {
      slug: project.data.uid,
      name: RichText.asText(project.data.name),
      description:
        project.data.description.find(
          (description: any) => description.type === 'paragraph'
        )?.text ?? '',
    };
  })

  return { projects, totalCount };
}

export function useProjects(page:number){
 return useQuery(['projects', page],()=> getProjects(page), 
 ); 
}