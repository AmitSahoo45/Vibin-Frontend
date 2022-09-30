import React, { useContext, useState } from 'react'
import { Container, Grow, Grid, AppBar, TextField, Button } from '@material-ui/core'
import { useHistory, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import ChipInput from 'material-ui-chip-input'

import { getPostBySearch } from '../../actions/posts';
import { SocialMediaStore } from '../../context/Context'
import Posts from '../Posts/Posts'
import useStyles from './Style'
import Paginate from '../Pagination/Pagination';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}


const HomePage = () => {
    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);

    const dispatch = useDispatch();
    const { currentId } = useContext(SocialMediaStore);
    const classes = useStyles();
    const query = useQuery();
    const history = useHistory();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');

    const searchPost = () => {
        if (search.trim() || tags) {
            dispatch(getPostBySearch({ search, tags: tags.join(',') }));
            history.push(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
        } else {
            history.push('/');
        }
    };

    const handleKeyPress = () => searchPost();

    return (
        <>
            <Grow in>
                <Container className={classes.HomePage}>
                    <AppBar className={classes.appBarSearch} position="static" color='inherit'>
                        <div className={classes.searchBox}>
                            <TextField
                                className={classes.searchBar}
                                name="search"
                                variant="standard"
                                fullWidth
                                placeholder='Search Posts'
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <Button
                                className={classes.searchButton}
                                onClick={handleKeyPress}
                                variant="contained"
                                color="primary"
                            >
                                Search
                            </Button>
                        </div>
                        <div className={classes.searchBox}>
                            <ChipInput
                                className={classes.chipInput}
                                value={tags}
                                onAdd={(tag) => setTags([...tags, tag])}
                                onDelete={(tagToDelete) => setTags(tags.filter((tag) => tag !== tagToDelete))}
                                label="Search By Tags"
                                variant='outlined'
                            />
                            <Button
                                onClick={searchPost}
                                className={classes.searchButton}
                                variant="contained"
                            >Search</Button>
                        </div>
                    </AppBar>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={12}>
                            <Posts />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
            {(!searchQuery && !tags.length) && (
                <Paginate page={page} />
            )}
        </>
    )
}

export default HomePage