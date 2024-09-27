// components/BookList.tsx
import { Box, Typography, List, ListItem } from '@mui/material';

interface Book {
  id: string;
  title: string;
  author: string;
  ISBN: string;
  genre: string;
}

interface BookListProps {
  books: Book[];
}

const BookList = ({ books }: BookListProps) => {
  return (
    <Box mt={2}>
      <Typography variant="h5">Available Books</Typography>
      <List>
        {books.map((book) => (
          <ListItem key={book.id}>
            <Typography>{book.title} by {book.author} (ISBN: {book.ISBN})</Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default BookList;
