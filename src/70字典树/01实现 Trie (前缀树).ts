class Trie {
  children: Record<string, any> = {};

  insert(word: string): void {
    let nodes = this.children;

    for (const ch of word) {
      // 循环 word
      if (!nodes[ch]) {
        // 当前字符不在子节点中 则创建一个子节点到 children 的相应位置
        nodes[ch] = {};
      }
      nodes = nodes[ch]; // 移动指针到下一个字符子节点
    }

    nodes.isEnd = true; // 字符是否结束
  }

  searchPrefix(prefix: string) {
    let nodes = this.children;

    for (const ch of prefix) {
      // 循环前缀
      if (!nodes[ch]) {
        // 当前字符不在子节点中 直接返回 false
        return false;
      }

      nodes = nodes[ch]; // 移动指针到下一个字符子节点
    }

    return nodes; // 返回最后的节点
  }

  search(word: string): boolean {
    const nodes = this.searchPrefix(word);

    // 判断 searchPrefix 返回的节点是不是字符串的结尾的字符
    return nodes !== false && nodes.isEnd !== undefined;
  }

  startsWith(prefix: string): boolean {
    return !!this.searchPrefix(prefix);
  }
}

const trie = new Trie();
trie.insert('Hello zy');
console.log(trie.search('Hello zy'));
console.log(trie.startsWith('He'));
