import React, { useState } from 'react';
import Pagination from '../../Components/Pagination';
import ProjectsList from '../../Components/ProjectsList';
import { useProjects } from '../../services/hooks/useProjects';

import { Container } from './styles';

const Projects: React.FC = () => {
  const [ page, setPage] = useState(1);
  const {data, isLoading, error, isFetching } = useProjects(page);
  return (
    <Container>
      {isLoading ? 'Carregando ' : error ? 'Erro ao carregar os dados': <ProjectsList />}
      <Pagination currentPage={page} totalContOfRegisters={data?.totalCount || 0} onPageChange={setPage} />
    </Container>
  );
}

export default Projects;