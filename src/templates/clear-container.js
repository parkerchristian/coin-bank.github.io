export default function clearContainer(node) {
    while(node.children.length > 0) {
        node.lastElementChild.remove();
    }
}